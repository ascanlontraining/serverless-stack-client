import { useState } from "react";

export function useFormFields(initialState) {
    const [fields, setValues] = useState(initialState);
    //console.log("Handle field change");
    return [
        fields,
        function(event) {
            //console.log("event", event.target.value)
            setValues({
                ...fields,
                [event.target.id]: event.target.value
            });
        }
    ];
}