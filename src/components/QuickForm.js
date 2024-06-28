import React, { useState, useEffect } from 'react';
import QuickTravel from './QuickTravel';
import { useDispatch } from 'react-redux';
import { setArr, setDep } from '../store/actions';
import { useMap } from 'react-leaflet';

let depcity_obj = {
	name: '',
	location: ''
}


const QuickForm = () => {
	const [dcity, setDcity] = useState(null);
	const [acity, setAcity] = useState(null);

    
    const dispatch = useDispatch();



	useEffect(
		() => {
			dispatch(setDep(dcity));
			console.log("[F] Dispatch called ", dcity)
		}
	, [dcity])
	useEffect(
		() => {
			dispatch(setArr(acity));
			console.log("[F] Dispatch called ", acity)
		}
	, [acity])

	return (
		<div className='w-100 p-2'>
			<form>
				<QuickTravel name="Departure" setCity={(e) => setDcity(e)} />
				<QuickTravel name="Arrival" setCity={(e) => setAcity(e)} />
			</form>
		</div>
	)
}

export default QuickForm;