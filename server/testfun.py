import pandas as pd
from geopy.distance import geodesic
from os.path import dirname, join

def split_route(start_wp, end_wp, csv_path, split_distance_km=20):
    """
    Splits the road between two waypoints and searches for intermediate waypoints from a CSV file.

    Args:
    start_wp (list): Starting waypoint [latitude, longitude].
    end_wp (list): Ending waypoint [latitude, longitude].
    csv_path (str): Path to the CSV file containing waypoints.
    split_distance_km (int): Distance in kilometers for each segment.

    Returns:
    list: Array of waypoints commencing with the first waypoint and ending with the last.
    """

    # Read the CSV file
    df = pd.read_csv(csv_path, sep=',')

    repair = lambda s: float(str(s).replace(',', '.'))

    # Calculate the total distance between start_wp and end_wp
    total_distance = geodesic(start_wp, end_wp).kilometers

    # Calculate the number of splits
    num_splits = int(total_distance // split_distance_km)

    # Calculate the step size in latitude and longitude
    lat_step = (end_wp[0] - start_wp[0]) / (num_splits + 1)
    lon_step = (end_wp[1] - start_wp[1]) / (num_splits + 1)

    # Initialize the result with the starting waypoint
    result = [start_wp]

    # Generate intermediate waypoints
    for i in range(1, num_splits + 1):
        intermediate_wp = [start_wp[0] + i * lat_step, start_wp[1] + i * lon_step]
        
        # Find the closest waypoint in the CSV
        df['distance'] = df.apply(lambda row: geodesic(intermediate_wp, [str(row['LATITUDE']).replace(',','.'), str(row['LONGITUDE']).replace(',','.')]).kilometers, axis=1)
        closest_wp = df.loc[df['distance'].idxmin()]
        print(df['distance'].idxmin())
        # Append the closest waypoint to the 
        # df['distance'].
        way = [repair(closest_wp['LATITUDE']), repair(closest_wp['LONGITUDE'])]
        print(way)
        if way not in result:
            result.append(way)
    
    # Add the end waypoint
    result.append(end_wp)

    return result

# Example usage
start_wp = [34.033, -6.8]
end_wp = [34.6867, -1.9114]

csv_path = join(dirname(__file__), 'data.csv')
waypoints = split_route(start_wp, end_wp, csv_path)
print(waypoints)