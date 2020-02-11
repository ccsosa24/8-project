import React from 'react';
import './custom.scss';
import ImageContainer from './ImageContainer';

class Index extends ImageContainer.Component {
    render() {

     $('.card').click(function(){
            $(this).toggleClass('flipped');
          });
       }   
}

export default Index;

       