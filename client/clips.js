getClip = (path) => {
  let root = Meteor.isCordova ? 'http://meteor.local' : ''
  return `${root}/${path}`
}
