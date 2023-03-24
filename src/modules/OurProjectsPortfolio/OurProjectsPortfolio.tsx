import React from 'react'
import { ProjectCard } from '../../components'
import { PRODUCTS } from '../../constatnts'
import { BlockLayout } from '../../layouts'
import s from './OurProjectsPortfolio.module.scss'

export function OurProjectsPortfolio (){
  return (
    <BlockLayout value='Наши проекты' position='center'>
      <div className={s.wrapper}>
        {PRODUCTS.map((el) => (
          <ProjectCard
            title={el.title}
            key={el.id}
            description={el.description}
          />
        ))}
      </div>
    </BlockLayout>
  )
}
