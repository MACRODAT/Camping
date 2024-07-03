import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuickCard from './QuickCard';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import QuickCard2 from './QuickCard2';


const campgrounds = [
    {
        name: 'Camping Miramonte',
        region: 'Northern Morocco',
        latitude: 35.1681,
        longitude: -5.2610,
        comments: 'Beautiful location with stunning views.'
    },
    {
        name: 'Camping Atlantica Imourane',
        region: 'Atlantic Coast',
        latitude: 30.5047,
        longitude: -9.6858,
        comments: 'Great facilities and close to the beach.'
    },
    // Add more campgrounds here
];

const QuickSummary = () => {
		
	let data = useSelector(state => state.itinerary)
	let route = useSelector(state => state.route)
	let info = data.info;
	let summary = null;
	let itinerary = null;
	let distances = []
	if (route)
	{
		summary = route[0].summary;
		itinerary = route[0].instructions;
	}
	console.log(data)
	if (info == null || info.map == null)
	{
		return (
			<></>
		)
	}
	if (itinerary != null )
	{
		let arr = itinerary;
		let i = 0;
		let w = 0;
		distances = [0];
		while (i < arr.length)
		{
			if (arr[i] == null)
			{
				i = i + 1;
				continue;
			}
			if (arr[i].type == "WaypointReached" || arr[i].type == "DestinationReached")
			{
				w = w + 1;
				distances.push(parseInt(arr[i].distance))
			}
			else
			{
				distances[w] += parseInt(arr[i].distance)
			}
			i = i + 1;
		}
		i = 0;
		while (i < w)
		{
			distances[i] /= 1000
			i = i + 1
		}
		// console.log(distances)
	}
    return (
        <Container key={122}>
            <Row >
				{
					route != null ?
					<Card style={{ width: '100%', margin: '0', padding: '1 px', marginTop: '5px', borderRadius: '0' }}>
						<Card.Body>
							<Card.Title>Camps ({info.length -  1}) [{(summary?.totalDistance / 1000).toFixed(1)} km - {(summary.totalTime / 3600).toFixed(2)} h]</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Each campground with associated info</Card.Subtitle>
						</Card.Body>
					</Card>
					:
					<></>
				}
                {info.map((campground, index) => (
						index > 0 ?
							(
								<>
									<Col key={index*2+20} sm={12} md={12} lg={12}>
										<QuickCard2
											distance={distances[index - 1]}
											index={index}
											max={distances.length}
											/>
									</Col>
									<Col key={index} sm={12} md={12} lg={12}>
										<QuickCard
											name={campground.name}
											region={campground.region}
											latitude={campground.latitude}
											longitude={campground.longitude}
											comments={campground.comments}
											/>
									</Col>
									
								</>
								
							)
							: <></>
                    
                ))}
				<Col key={12230} sm={12} md={12} lg={12}>
										<QuickCard2
											distance={distances.reverse()[1]}
											index={4}
											max={3}
											/>
				</Col>
            </Row>
        </Container>
    );
};

export default QuickSummary;