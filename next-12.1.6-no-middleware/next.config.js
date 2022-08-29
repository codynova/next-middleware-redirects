console.log('Next 12.1.6 no middleware')

module.exports = {
  redirects: async () => [
    {
      source: '/test1',
      destination: '/test2',
      permanent: true,
    }
  ]
}
