import React from 'react'

const Img_Components = () => {
    const imgArray = ["https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8fb6db2e-277b-4913-b27f-87bf893b4471._CR0%2C0%2C1500%2C1500_SX375_SY375_.jpg", "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/2475a7af-ac03-4082-92fa-16d25a7295eb._CR0%2C0%2C1500%2C1500_SX320_SY320_.jpg", "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/7f62ddcd-5690-472a-83f9-7888db1844e9._CR0%2C0%2C1500%2C1500_SX480_SY480_.jpg", "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8fb6db2e-277b-4913-b27f-87bf893b4471._CR0%2C0%2C1500%2C1500_SX375_SY375_.jpg"];


    return (
        <div>
        <div className="subImage">
            
            {imgArray.map((url) => {
                // console.log(url, "image Display");
                return (<div>
                    <img src={url} className="subImage1" />
                    
                </div>);
            })};
        </div>
         
         </div>
    )
}

export default Img_Components;