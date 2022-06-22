import React, { Component } from "react";
import Gallery2 from './Gallery2';

const imgUrls = ["https://drive.google.com/uc?export=view&id=1t-xtW1GqkiM1MGWTcWR4C2fVUToDXOOG",
"https://drive.google.com/uc?export=view&id=1gciixlg4YKvOA-7YOFSv_PUU2PVSU7lP",
"https://drive.google.com/uc?export=view&id=16ih2KQ1s91r3FjgsxuQwrkJrOTaYB4R2",
"https://drive.google.com/uc?export=view&id=1kTXz0zV5nLj9LuavZogez0nxXEH5cgVf",
"https://drive.google.com/uc?export=view&id=1xGSVZBkKhJ28W7V82rqBJvuoQyL2WZb7",
"https://drive.google.com/uc?export=view&id=1cVf0yQSPrHS8ysBvHl3CtIjbYnu0QEff",
"https://drive.google.com/uc?export=view&id=1xsr-D7HZxZmQXijVdVDDsh-yQzQcgNvz", 
"https://drive.google.com/uc?export=view&id=1PgKBbn9tKYW5A7_fEp3i7qDbnpWz1ryc",
"https://drive.google.com/uc?export=view&id=1XfuCE-SvdaL8UkYinXtzSNLrkjaJ1qCQ",
"https://drive.google.com/uc?export=view&id=1E5YEPSIsenUKeIY4llwVO_oAkBYNkWru",
"https://drive.google.com/uc?export=view&id=1o5_JDm1UF615MUxEuCAbNldsuXep1uxg",
"https://drive.google.com/uc?export=view&id=1MBGFc0j0_YEJ_FbFpzRHHUCxH4dMiNV_",
"https://drive.google.com/uc?export=view&id=1WA2YWRHp0SkfcsHNBB781HWYbVns-lNQ",
"https://drive.google.com/uc?export=view&id=1m1nXo0r1kk2CtxClZwiGvkREmP6FC__p",
"https://drive.google.com/uc?export=view&id=1n1VbdUYJTEhNDMzNAD97Y55cPpvaKf_v",
"https://drive.google.com/uc?export=view&id=1wR4W1GYKC3aU0ewTdFk2QPkxaakoVPxP",
"https://drive.google.com/uc?export=view&id=1TeUAoFDusEvXlo_3oI4CzAQFVElymeJ6",
"https://drive.google.com/uc?export=view&id=1kw58SUNsNXH6tj4NdhGb-vz5ZFTFMqbM",
"https://drive.google.com/uc?export=view&id=1E_RwsMgEgTxHLk32ZnymKJGL9vj1DpFj",
"https://drive.google.com/uc?export=view&id=1l3KoT4UbM2QSttOyWw-jr87CUJ9mzJnG",
"https://drive.google.com/uc?export=view&id=19IQ4tvRGyRb5_6p8aBbrfdV_-SUs31x2",
"https://drive.google.com/uc?export=view&id=1FD7U3iJw4-ycJb5d8qnOUq1iou6Ig49j", 
"https://drive.google.com/uc?export=view&id=1NTT-0TgJgAbrkoYeKXrAtzLfyFsE15xl",
"https://drive.google.com/uc?export=view&id=1ZEsN1nS2BqFs0RMxhWgl6fcgqME5TmSE",
"https://drive.google.com/uc?export=view&id=1pbNwOnIy5x42-c38f8OiiSYe79ATFQm1",
"https://drive.google.com/uc?export=view&id=1jhmyWqzydR9YEpDL5TnwWAtAD38xU-fI",
"https://drive.google.com/uc?export=view&id=1Y05mRci1sqoXltll68NYWw57Blz6SRoG",
"https://drive.google.com/uc?export=view&id=1ZB5kDT8S5uhV_wf5r77FHCtfa0d64jCa",
"https://drive.google.com/uc?export=view&id=1ggBCVCrhLPvgRm5NxYCXXDhb-iKpBlUl",
"https://drive.google.com/uc?export=view&id=1JM_3JlqvTJTLAnmVYfSzueYD7JIoiK_3",
"https://drive.google.com/uc?export=view&id=1_MuITl0HPWtz4i0lUhkh6Dsvg6xZvDPF",
"https://drive.google.com/uc?export=view&id=155_0yJ5MQfkAwIM_GgvUKDtk4aUazmSG",
"https://drive.google.com/uc?export=view&id=1iMjyaE2nrlYv7c6Pt6W9s52Pv4tY1dZl"

];

class Indiranagar extends Component{
    render(){
        return(
            <Gallery2 data={imgUrls} heading="STEMx Indiranagar"/>
        );
    };
};

export default Indiranagar;
