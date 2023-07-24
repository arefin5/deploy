import React from 'react';
import Logo from '../assest/images/logo.png'
export const imageSource = (user) => {
  if (user.image) {
    return user.image.url;
  } else {
    return Logo;
  }
};
