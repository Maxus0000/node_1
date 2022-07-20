"use strict";
function createElement(tag, { classNames = [], attributes = {}, events={} }, ...children) {
  const element = document.createElement(tag);
  if (classNames.length) {
    element.classList.add(...classNames);
  }
  for (const [nameAttr, valueAttr] of Object.entries(attributes)) {
    element.setAttribute(nameAttr, valueAttr);
  }
  for (const [typeEvent, handleEvent] of Object.entries(events)) {
    element.addEventListener(typeEvent, handleEvent);
  }
  element.append(...children);
  return element;
}

const idTimeout = setTimeout(createSubscribe,2000)
function createSubscribe(){
  const h2 = createElement('h2',{classNames:['subscribe_heading']},document.createTextNode('Subscribe'))
  const p = createElement('p',{},document.createTextNode(`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
  reiciendis blanditiis suscipit ab consectetur impedit, ipsa nihil neque
  modi, eos sint necessitatibus delectus ad magnam quasi consequatur.
  Accusamus, laboriosam exercitationem?`))

  const btn = createElement('button',{events:{'click':subscribeHandler}},document.createTextNode('Subscribe'))

  const section = createElement('section',{classNames:['subscribe']},h2,p,btn)

  document.body.append(section)
}

const button = document.querySelector('.subscribe_btn')
button.addEventListener('click',btnHandler)
function btnHandler(){
  clearTimeout(idTimeout)
}
function subscribeHandler(e){
e.target.parentElement.remove()
}


