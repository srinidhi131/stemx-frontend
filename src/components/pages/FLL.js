import React, { Component } from "react";
import Gallery2 from './Gallery2';

const imgUrls = ["https://drive.google.com/uc?export=view&id=1zGHXfbYw12eet8ybnPTxdNpHWwt408nk",
"https://drive.google.com/uc?export=view&id=1JUF1SAvZJogYeO0F8jZ_mwc1Sua0QmcG",
"https://drive.google.com/uc?export=view&id=1MGn41L9j0VdFY2764VGdmQyWQ0G5Cs0g",
"https://drive.google.com/uc?export=view&id=1s8t7Zu-wD__8fWiX82bnyFsINv0eHAbC",
"https://drive.google.com/uc?export=view&id=13A3PhJmH8FHI6awQzQoTxLY-VFDKvAS-",
"https://drive.google.com/uc?export=view&id=1N8rvORsaVuWiVjTsBdoUrxWohirS1ai8",
"https://drive.google.com/uc?export=view&id=1AhF1gfCcm0UwqVINQ66LYCc74WzhHfRv", 
"https://drive.google.com/uc?export=view&id=1QAJgZpH49YoRH1UUHQu33fZQ0-ZKFluN",
"https://drive.google.com/uc?export=view&id=1gHvAb3cg0qLkRFPtp7-eilkOLhmPT_jp",
"https://drive.google.com/uc?export=view&id=1k4nb0jxdDXodaMGc7mlGBcdOJthbRMQO",
"https://drive.google.com/uc?export=view&id=1fBJCz-eIxoC_fTHJg7EvqbOtXvka-Jz9",
"https://drive.google.com/uc?export=view&id=1KfzfcDaXD72GbtneaFFSbrg_eMGS76-K"
];

class FLL extends Component{
    render(){
        return(
            <Gallery2 data={imgUrls} heading="First Lego League"/>
        );
    };
};

export default FLL;
