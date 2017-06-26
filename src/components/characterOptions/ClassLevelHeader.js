import React, { Component } from 'react'
import ClassLevelContainer from './ClassLevelContainer'

export default class ClassLevelHeader extends Component{
  render(){
    return (
      <div>
        Class Level:
        <ClassLevelContainer selectedLevel={1} amountOfPoints={21}>I</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={2} amountOfPoints={22}>II</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={3} amountOfPoints={23}>III</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={4} amountOfPoints={24}>IV</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={5} amountOfPoints={25}>V</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={6} amountOfPoints={26}>VI</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={7} amountOfPoints={27}>VII</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={8} amountOfPoints={28}>VIII</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={9} amountOfPoints={29}>IX</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={10} amountOfPoints={30}>X</ClassLevelContainer>
      </div>
    );
  }
}
