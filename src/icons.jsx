import {
  SiDocker, SiKubernetes, SiTerraform, SiSpringboot,
  SiExpress, SiFastify, SiOpenapiinitiative, SiCamunda, SiNextdotjs, SiTailwindcss, SiAngular,
  SiReact, SiVuedotjs, SiMongodb, SiRedis, SiOracle, SiPostgresql, SiAndroid, SiIonic,
  SiCapacitor, SiApachecordova, SiNodedotjs, SiJavascript, SiTypescript, SiKotlin,
  SiClockify
} from 'react-icons/si'
import { FiGlobe } from 'react-icons/fi'
import { VscAzure } from 'react-icons/vsc'
import { DiOpenshift, DiScrum } from 'react-icons/di'
import { FaJava, FaJenkins } from 'react-icons/fa'
import { CgInfinity } from 'react-icons/cg'
import { TbLambda } from 'react-icons/tb'
import { PiEngineBold } from 'react-icons/pi'

export function iconFor(label){
  const s = (label || '').toLowerCase()
  const within = (needle) => s.includes(needle)

  // Languages
  if (within('italian')) return () => <></>
  if (within('english')) return () => <></>

  // DevOps
  if (within('azure')) return VscAzure
  if (within('docker')) return SiDocker
  if (within('kubernetes') || within('aks')) return SiKubernetes
  if (within('terraform')) return SiTerraform
  if (within('jenkins')) return FaJenkins
  if (within('openshift')) return DiOpenshift
  if (within('pipelines')) return CgInfinity
  if (within('scrum')) return DiScrum

  // Back-end
  if (within('spring boot') || within('spring')) return SiSpringboot
  if (within('express')) return SiExpress
  if (within('fastify')) return SiFastify
  if (within('rest') || within('openapi')) return SiOpenapiinitiative
  if (within('camunda')) return SiCamunda
  if (within('drools')) return PiEngineBold
  if (within('quartz')) return SiClockify

  // Front-end
  if (within('next')) return SiNextdotjs
  if (within('tailwind')) return SiTailwindcss
  if (within('angular')) return SiAngular
  if (within('react')) return SiReact
  if (within('vue')) return SiVuedotjs

  // Data
  if (within('mongo')) return SiMongodb
  if (within('redis')) return SiRedis
  if (within('oracle')) return SiOracle
  if (within('postgres')) return SiPostgresql

  // Mobile
  if (within('android')) return SiAndroid
  if (within('ionic')) return SiIonic
  if (within('capacitor')) return SiCapacitor
  if (within('cordova')) return SiApachecordova

  // Programming
  if (within('node')) return SiNodedotjs
  if (within('javascript')) return SiJavascript
  if (within('typescript')) return SiTypescript
  if (within('kotlin')) return SiKotlin
  if (within('java')) return FaJava
  if (within('fp-ts')) return TbLambda

  // Default
  return FiGlobe
}
