import React, { Component } from 'react'
import ClassLevelContainer from './ClassLevelContainer'

export default class ClassLevelHeader extends Component{
  render(){
    return (
      <div>
        Class Level:
        <ClassLevelContainer selectedLevel={1} totalSkillPoints={21}>I</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={2} totalSkillPoints={22}>II</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={3} totalSkillPoints={23}>III</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={4} totalSkillPoints={24}>IV</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={5} totalSkillPoints={25}>V</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={6} totalSkillPoints={26}>VI</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={7} totalSkillPoints={27}>VII</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={8} totalSkillPoints={28}>VIII</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={9} totalSkillPoints={29}>IX</ClassLevelContainer>
        {' - '}
        <ClassLevelContainer selectedLevel={10} totalSkillPoints={30}>X</ClassLevelContainer>
      </div>
    );
  }
}
