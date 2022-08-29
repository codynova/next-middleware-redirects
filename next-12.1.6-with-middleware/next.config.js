console.log('Next 12.1.6 with middleware')

module.exports = {
  redirects: async () => [
    {
      source: '/test1',
      destination: '/test2',
      permanent: true,
    }
  ]
}
