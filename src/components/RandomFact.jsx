import { useDispatch, useSelector } from "react-redux";
import { STATUS, actions } from "../features/randomFact";

const RandomFact = () => {

    const dispatch = useDispatch();

    const factObject = useSelector(state => state.randomFact)

    let content = null;

    if (factObject.status == STATUS.NORMAL) {
        content = 'Redo för fakta?';
    } 
    else if (factObject.status == STATUS.FETCHING) {
        content = 'Väntar på fakta...';
    }
    else if (factObject.status == STATUS.SUCCESS) {
        factObject.fact;
    }
    else {
        content = 'Kunde inte hämta fakta'
    }

    return (
        <div>
            <button onClick={() => fetchFact(dispatch)}>Get Fact!</button>

            <div>
                {content}
            </div>
        </div>
    )
}

async function fetchFact(dispatch) {

    //is fetching
    dispatch(actions.isFetching());
    const URL = 'https://uselessfacts.jsph.pl/random.json?language=en';

    

    try {
        let response = await fetch(URL);
        let json = await response.json();
        //console.log('Got data: ', json);
        let fact = json.text;
        dispatch(actions.success(fact))
    } catch {
        dispatch(actions.failure());
    }

}

export default RandomFact;