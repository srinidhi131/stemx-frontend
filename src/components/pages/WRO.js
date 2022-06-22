import React, { Component } from "react";
import Gallery2 from './Gallery2';

const imgUrls = ["https://drive.google.com/uc?export=view&id=18kNvjf_v8C0B0G0R3b3KHHZzm8eI6SEt",
"https://drive.google.com/uc?export=view&id=1LMlKCWhNNGX0YCdbdMf1KhsgHii1w-Ry",
"https://drive.google.com/uc?export=view&id=1_z4TQ9mUWeERiCvVlkPsuAKaRvSq52KP",
"https://drive.google.com/uc?export=view&id=1-g6debnmCJAX-5fXCMGRzbjZcu2YfGF9",
"https://drive.google.com/uc?export=view&id=1ql3G54LGJAseRkQcabyWx7sBmY6VbDL7",
"https://drive.google.com/uc?export=view&id=1h__7l8RduHNH_0L1_lclX_p-4T5fgAvW",
"https://drive.google.com/uc?export=view&id=1NfZgyvKdBCFk-z8cNyEhDu1cAKtAs_Ai",
"https://drive.google.com/uc?export=view&id=1UPzxdysNDR2kwYDEJEbZXltMd9a0G16C"
];

class WRO extends Component{
    render(){
        return(
            <Gallery2 data={imgUrls} heading="World Robotics Olympian"/>
        );
    };
};

export default WRO;
