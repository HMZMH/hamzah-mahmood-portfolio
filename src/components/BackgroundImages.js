import MyName from '../images/My_Name.png';

function BackgroundImages(){
    
    return(

      <div class="d-flex justify-content-center">
        
        <img src={MyName} alt='My signature' class="img-fluid"/>
      
      </div>

    );

}

export default BackgroundImages;