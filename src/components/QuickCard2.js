import React from 'react';
import Card from 'react-bootstrap/Card';

const QuickCard2 = ({ distance, time, max, index}) => {
	let status = "between camps";
	index = index - 1;
	try{
		distance = distance.toFixed(1)
	} catch (e)
	{
		console.error("[E] ", e)
	}
	if (index == 0)
	{
		status = "to first camp";
	}
	else if (index == max)
	{
		status = "to final destination"
	}
    return (
        <Card style={{ width: '70%', margin: '1rem', opacity: '95%', backgroundColor: '#211e1e', color: 'white' }}>
            <Card.Body>
				<Card.Title style={{fontSize: '16px', textAlign: 'center'}}>Distance {status}: {distance} km</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default QuickCard2;