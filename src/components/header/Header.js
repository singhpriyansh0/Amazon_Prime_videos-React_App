import './Header.css'

function Header () {
    return (
    <header >
    <div className='header_content'>
        <div  className='Billboard_1'>
            <div className='header_billboard'>
                <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg' alt='billboard'/>
            </div>

            <div >
                <h1 className='header_heading'>Welcome to Prime Video</h1>
                <h4  className='header_desc'>Watch the latest movies, TV shows, and award-winning<br/>
                    Amazon Originals
                </h4>
                <button className='Signin_button'>Sing in to Join Prime</button>
            </div>
        </div>

        <div> 
            <div className='Billboard_2'>
                <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Left.jpg' alt='billboard_2'/>
            </div>  
            <div >
                <h1 className='header_heading_2'>Movie rentals on Prime Video</h1>
                <h4  className='header_desc_2'>Early Access to new movies, before digital subscription
                </h4>
                <button className='Rent_button'>Rent now</button>
            </div>

        </div>

        <div>
            <div className='Billboard_3'>
                <img src='https://wallpapercave.com/wp/wp6903417.jpg' alt='billboard_3'/>
                <button className='button_101'>reny</button>

            </div>

            <div >
                <h1 className='header_heading_3'>Your favorite channels all in<br/> one place</h1>
                <h4  className='header_desc_3'>With Prime Video Channels, find shows and movies<br/>from your favorite channels all in one place. Enjoy<br/>with an add-on subscription to Channels of your<br/>choice
                </h4>
                
            </div>
        </div>

        <div>
            <div className='Billboard_4'>
                <img src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left.jpg'alt='billboard_4'/>

            </div>
        </div>

        <div>
            <div className='Billboard_5'>
                <img src='https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._CB1517304519_.jpg' alt='billboard_5'/>

            </div>
        </div>


    </div>

    </header>
    );

}

export default Header;