import ReactGA from "react-ga4";

export const eventSenderGA = (category: string, action: string, label: string) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    })
}

// category -> Paging, Submit, etc ...
// action: ex. Click 
// lable: 어디서?