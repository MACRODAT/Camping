import React, { useState, useEffect } from 'react';
import cities from '../data/cities';

const QuickTravel = ({name, setCity}) => {
	const [fil, setFil] = useState([]);
	const [departureCity, setDepartureCity] = useState("");
	const [depcor, setDepcor] = useState(false);

	useEffect(() => {
		const objs = cities.filter(obj => obj.city.toUpperCase().startsWith(departureCity.toUpperCase()));
		setFil(objs);
		if (objs && objs[0] && objs[0].city.toUpperCase() == departureCity.toUpperCase())
		{
			setDepcor(true);
			setCity(objs[0]);
		}
		else{
			setDepcor(false);
			setCity(null);
		}
	}, [departureCity])

	return (
				<div className='mb-2'>
					<label htmlFor="departureCity" className='form-label'>{name} city {fil.length != 1 ? '(' + fil.length + ')' : ""} :</label>
					<input type="text" className='form-control'
						 id="depatureCity" value={departureCity} 
						 style={{color: depcor ? "green":"grey"}}
						 onChange={e => setDepartureCity(e.target.value)}
						 aria-autocomplete='none'
						 aria-haspopup='false'
						 autoComplete='false'
						 >
					</input>
					{
						(departureCity.length > 1 && fil.length > 0 && fil.length < 20) && !depcor  ?
						(
							<div className='float'>
								<ul className='list-group'>
									{fil.map(el =>  (
										<li 
										key={el.city}
										onClick={() => setDepartureCity(el.city)}
										className='color: grey; list-group-item'>{el.city}</li>
									))}
								</ul>
							</div>
						) : <></>
					}
					
				</div>
	)
}

export default QuickTravel;