import pandas as pd
from geopy.distance import geodesic
from os.path import dirname, join
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
csv_path = join(dirname(__file__), 'data.csv')

@app.route('/', methods=['GET'])
def main():
    return "Campings API."

def split_route(start_wp, end_wp, csv_path, split_distance_km=50):
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
    info = [{}]

    # Generate intermediate waypoints
    for i in range(1, num_splits + 1):
        intermediate_wp = [start_wp[0] + i * lat_step, start_wp[1] + i * lon_step]
        
        # Find the closest waypoint in the CSV
        df['distance'] = df.apply(lambda row: geodesic(intermediate_wp, [str(row['LATITUDE']).replace(',','.'), str(row['LONGITUDE']).replace(',','.')]).kilometers, axis=1)
        closest_wp = df.loc[df['distance'].idxmin()]
        j = 1
        print("[+] Searching ", i, " with ", df['distance'].min())
        while j < df['distance'].count():
            print("[ ] ", df['distance'].nsmallest(j).iloc[-1])
            if df['distance'].nsmallest(j).iloc[-1] > split_distance_km * 2:
                break
            # Append the closest waypoint to the 
            # df['distance'].
            way = [repair(closest_wp['LATITUDE']), repair(closest_wp['LONGITUDE'])]
            print(way)
            if way not in result:
                result.append(way)
                info.append(
                    {
                        "name": closest_wp['Name'],
                        "region": closest_wp['Region'],
                        "longitude": closest_wp['LONGITUDE'],
                        "latitude": closest_wp['LATITUDE']
                    }
                )
                break
            j = j + 1
    
    # Add the end waypoint
    result.append(end_wp)

    return {
        "waypoints": result,
        "info": info
    }

@app.route('/getways', methods=['GET'])
def get_ways():
    # Retrieve query parameters
    start_lat = float(request.args.get('start_lat'))
    start_lon = float(request.args.get('start_lon'))
    end_lat = float(request.args.get('end_lat'))
    end_lon = float(request.args.get('end_lon'))
    # csv_path = request.args.get('csv_path')
    split_distance_km = float(request.args.get('split_distance_km', 100))
    
    # Define start and end waypoints
    start_wp = [start_lat, start_lon]
    end_wp = [end_lat, end_lon]
    
    # Get the waypoints
    waypoints = split_route(start_wp, end_wp, csv_path, split_distance_km)
    
    # Return the waypoints as JSON
    return jsonify(waypoints)

if __name__ == '__main__':
    app.run(debug=True)


