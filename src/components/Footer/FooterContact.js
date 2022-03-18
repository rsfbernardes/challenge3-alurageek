import React from 'react';

function FooterContact() {
  return (
    <>
      <form action="">
        <p>Fale conosco</p>
        <input type="text" name="name" id="name" placeholder='Nome'/>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <input type="button" value="" />
      </form>
    </>
  )
}

export default FooterContact;