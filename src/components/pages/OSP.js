import React, { Component } from "react";
import Gallery2 from './Gallery2';

const imgUrls = ["https://drive.google.com/uc?export=view&id=1852dLXjZdIVbener_57bxv_8R0pfrCTO",
"https://drive.google.com/uc?export=view&id=10rkHk7wlI-DXEemJ3iMIM3ktZH2Qn4Xj",
"https://drive.google.com/uc?export=view&id=13uo0JaumQrTAGZgKSmLMEpayKx_STywQ",
"https://drive.google.com/uc?export=view&id=1zUpANEo7VZpZCxRvEPMJS9dMZx__QUxZ",
"https://drive.google.com/uc?export=view&id=17J__P8F66ezHlU6ZRHnu4ZoGYxlZSLGQ",
"https://drive.google.com/uc?export=view&id=1urlrnjV5Qt-OAw8poC-C7gjpueKbR2kO",
"https://drive.google.com/uc?export=view&id=1S-D2hf44AawREjrI1weihJsTh24iGORb", 
"https://drive.google.com/uc?export=view&id=16um3GC6iGLvK8eEnGb8eNUo-hS2vLsJ5",
"https://drive.google.com/uc?export=view&id=1WowoTB0YP4Iao_ZWnG7xLLZwwezY6Eaq",
"https://drive.google.com/uc?export=view&id=1jNv9IXGRPOtMoyWEKlda1dKAl3K_Y4Tg",
"https://drive.google.com/uc?export=view&id=1qwze47OcnfMXDAKCxNNcxknLnLOKct2X",
"https://drive.google.com/uc?export=view&id=17YTfLz03YuKbeVKtc4lXS8yvV1FCHXmg",
"https://drive.google.com/uc?export=view&id=17c1g6fG6psNW8fpyvNiZXZIC0c-qNwpK",
"https://drive.google.com/uc?export=view&id=1uAU4snYDva3h4Q1GaVjFXR1vCIWOI34h",
"https://drive.google.com/uc?export=view&id=1H9i_J6Lf1rDSwoXUbYO6VRWYCG7lkYMr"
];

class OSP extends Component{
    render(){
        return(
            <Gallery2 data={imgUrls} heading="Online STEM Programs"/>
        );
    };
};

export default OSP;
