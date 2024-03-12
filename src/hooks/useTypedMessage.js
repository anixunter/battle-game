import {wait} from "../helpers";
import { useEffect, useState } from "react";

export const useTypedMessage = (message) => {
    
const [typedMessage, setTypedMessage] = useState('');

useEffect(()=>{
    setTypedMessage('');
    if(message.length){
        (async () => {
                    let visibileMessage='';
                    for(let i=0; i<message.length; i++){
                        await wait(25);
                        visibileMessage = visibileMessage + message[i];
                        setTypedMessage(visibileMessage);
                    }
        })();
    }        
},[message]);

return typedMessage;

};