import React, { Component } from "react";
import Gallery2 from './Gallery2';

const imgUrls = ["https://drive.google.com/uc?export=view&id=1TBDnNGRtKN-1N4Kr_Gnc3Z8ZrUIT07p4",
"https://drive.google.com/uc?export=view&id=1CmkZwlPFS8aJExlYzxSerCoAaGfCbdSh",
"https://drive.google.com/uc?export=view&id=1nsJjMb75Ag2owAFD1SHwfRa4XkuX23UL",
"https://drive.google.com/uc?export=view&id=1SKQmumCfDdsAvbpsS5EhKpEPzwBcHFDj",
"https://drive.google.com/uc?export=view&id=1pLrJQfiC8cQ1CCpMcgiqx8Dgh_JJo4x6",
"https://drive.google.com/uc?export=view&id=1acKKzSnt28Fg4wJSmM5TsiKLZn9OhYb3",
"https://drive.google.com/uc?export=view&id=1-GOdbUIu1FOJdbPbNfAh5roAunURZfZF", 
"https://drive.google.com/uc?export=view&id=1jvqvapxuAsYVMZezM_kONYZW4kzeZW5x",
"https://drive.google.com/uc?export=view&id=1nhnHGMyZU9tHNnr9zwuYNFjSg86IjEtf",
"https://drive.google.com/uc?export=view&id=1r65DSIMWVTmmmTSKy82yFNc-RuKOKGSm",
"https://drive.google.com/uc?export=view&id=1zlQrPcpk9ruiCqIThCgQY8JmHchVj-Gf",
"https://drive.google.com/uc?export=view&id=1uPHEu597rJDz17vD7e78Nc8lPyrfZ_NM",
"https://drive.google.com/uc?export=view&id=1sCzpBRn8at6ZkVBWItDlgRCiU3PdM693",
"https://drive.google.com/uc?export=view&id=1T0USbJz1HHwJeS1Vcma0nslb1uawYsvb",
"https://drive.google.com/uc?export=view&id=1pCCZfKotMKWtUIBI-qF0JnneD2dmiv-H",
"https://drive.google.com/uc?export=view&id=1QDK_nuDNYGTGHD0PuvcWYK2CN59BfQ_g",
"https://drive.google.com/uc?export=view&id=1kQB-OeVfSBWlS4o8iW4aADOr9Q9u0yab",
"https://drive.google.com/uc?export=view&id=1Ss2PZtJMfdk6_Pw4ZWUVEOPL89xx3ARj",
"https://drive.google.com/uc?export=view&id=1yE-A4t4bWLxhAsSytDNCPhN3dM0LL9h1",
"https://drive.google.com/uc?export=view&id=1qUyoROFcuh-OAh6XtiY_pzbAixQuBmI8",
"https://drive.google.com/uc?export=view&id=1u1dbYHAXHny2dj_hc5m6Orvt2O9A98pg",
"https://drive.google.com/uc?export=view&id=1tK4Tr_ZLFilUZTY-ICs35Xaak6Oz-cao", 
"https://drive.google.com/uc?export=view&id=1SOukjLuDQFtLLeXtjZT5UB7fuUVdHPoB",
"https://drive.google.com/uc?export=view&id=1WUqau_edr9UmbTqH3DwZwzYSI3yY2eM1",
"https://drive.google.com/uc?export=view&id=1G_OuVWwWK4R25Z-IeHm6GN-dR5LVOl4J",
"https://drive.google.com/uc?export=view&id=15kqz8LEMSWantNWmOp16l6Vief2c7x7X",
"https://drive.google.com/uc?export=view&id=1XFWGeztIH34irbGreQKjPbQf6nVdKWFz"
];

class StemSchool extends Component{
    render(){
        return(
            <Gallery2 data={imgUrls} heading="STEM in Schools"/>
        );
    };
};

export default StemSchool;
