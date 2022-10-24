import React from 'react'
import IconExternal from './External'
import IconFolder from './Folder'
import IconGitHub from './Github'
import IconLinkedin from './Linkedin'

const Icon = ({name}) => {
  switch (name.toLowerCase()) {
    case 'external':
        return <IconExternal />
    case 'folder':
        return <IconFolder />
    case 'github':
        return <IconGitHub />
    case 'linkedin':
        return <IconLinkedin />
    default:
        return <IconExternal />
  }
}

export default Icon