console.log('Next 12.3.1 no middleware')

module.exports = {
  redirects: async () => [
    {
      source: '/test1',
      destination: '/test2',
      permanent: true,
    }
  ]
}
