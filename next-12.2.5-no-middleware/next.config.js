console.log('Next 12.2.5 no middleware')

module.exports = {
  redirects: async () => [
    {
      source: '/test1',
      destination: '/test2',
      permanent: true,
    }
  ]
}
