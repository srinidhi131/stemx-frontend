import React, { Component } from "react";
import Gallery2 from './Gallery2';

const imgUrls = ["https://drive.google.com/uc?export=view&id=1iV2fAPkIcA0K41H2nJZANbh-NTMVueSG",
"https://drive.google.com/uc?export=view&id=10DJwbnY1YpkbZITTzWvs6TLH_qLalMNw",
"https://drive.google.com/uc?export=view&id=1D9xcJ92iWwPFC1f6BWq7I7iC1VJ875Wn",
"https://drive.google.com/uc?export=view&id=1sXsRWc1snHz03II5lRBuuQEoHbydN2Fx",
"https://drive.google.com/uc?export=view&id=1kK1N4gJOOQMSu1JRpLaiHgiHpjc4PvGM",
"https://drive.google.com/uc?export=view&id=1P-FlQOQs5KNcy2FxOummnJkZH2krDuhb",
"https://drive.google.com/uc?export=view&id=1fa62xUPWRNinTogVnsAbQ4RIbGTwEdSU", 
"https://drive.google.com/uc?export=view&id=1nRvL6HSdL4YkoVXzBZjnwQxssij2UWsu",
"https://drive.google.com/uc?export=view&id=16jJ7HcrtRyH95r_ygLmEiknbWjAsyiFO",
"https://drive.google.com/uc?export=view&id=1USwL340qB9EIvgKjdRX2ixdEFNErrOQC",
"https://drive.google.com/uc?export=view&id=12cw4AZlkX_DsDSOXwYTMIEAZ3uTjgGWA",
"https://drive.google.com/uc?export=view&id=1MVzSDX4gB_ZKvE2s_JKG_4t9UyDjFS1P",
"https://drive.google.com/uc?export=view&id=1owzua3ijRQQwUi82dGsbaACa3N8wCrDi",
"https://drive.google.com/uc?export=view&id=15iXNX45nydjbSABB32BKRIzVTYgP5SyZ",
"https://drive.google.com/uc?export=view&id=1UD6LRagCTyllHmAc5mJUXY_x_E9qIoIF",
"https://drive.google.com/uc?export=view&id=1-HYWoDuZo4CouHCPe5mHR3VG-dMFjrfd",
"https://drive.google.com/uc?export=view&id=1joRdli5EV6p7cJGt-DSIekh4x98UQwJQ",
"https://drive.google.com/uc?export=view&id=1-f3H_8ovZS5KhMCFdWOox2XV9_K6qHL3",
"https://drive.google.com/uc?export=view&id=1WTLvAswnWKPXLJ_dJeYVZQ8DWb3B4VGJ",
"https://drive.google.com/uc?export=view&id=1wEnrFpWc7H0jwf7irsxyqemkqkZ4ZUFG",
"https://drive.google.com/uc?export=view&id=17sAa8yBuwt600p0KrkLzNBZ6ApzzW2Hx",
"https://drive.google.com/uc?export=view&id=1fNQ7XW5Lofv6Ngvni-8mPsi0jekFPgvg", 
"https://drive.google.com/uc?export=view&id=1tv4gNABVDtPh0sXVcFnBb14pm_BuGtzG",
"https://drive.google.com/uc?export=view&id=1GOpvi_WxUdG1LAHDOFGIUuGx0iOGoLtF",
"https://drive.google.com/uc?export=view&id=1bVyyJ-tBWxXiZCTuBdc_fC5nlQcsKTTc",
"https://drive.google.com/uc?export=view&id=1jMgmFmja-ySCSUetC0-YIaK2E1L5Quyu",
"https://drive.google.com/uc?export=view&id=1HUcwanSjdA9zVaqdDearN3iaiw-gDZH-"

];

class Whitefield extends Component{
    render(){
        return(
            <Gallery2 data={imgUrls} heading="STEMx Whitefield"/>
        );
    };
};

export default Whitefield;
