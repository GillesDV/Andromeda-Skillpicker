import React, { Component } from 'react'
import ClassLevelContainer from './ClassLevelContainer'

export default class ClassLevelHeader extends Component{
  render(){
    return (
      <div>
        Class Level:
        <ClassLevelContainer selectedLevel={1}>I</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={2}>II</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={3}>III</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={4}>IV</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={5}>V</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={6}>VI</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={7}>VII</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={8}>VIII</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={9}>IX</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={10}>X</ClassLevelContainer>
      </div>
    );
  }
}
