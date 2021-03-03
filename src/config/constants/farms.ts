import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x36b1C4193FF850109ECB08074e4308E85c8BEce8',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '0x905F931f260f00E00CE6DE5d97477Af3640BF7D8',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x467212cbA72E3E721dBFC92dD8102bf3A3D8d2f9',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x36b1C4193FF850109ECB08074e4308E85c8BEce8',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x699d4402DF5E7Be872e51A7e58dddd601c7c221a',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 11,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0x13fa085e3c1f6fb100f9deaf7fde3d62a7a9939a',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 15,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
  //   },
  //   tokenSymbol: 'BTC',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 17,
  //   lpSymbol: 'USDT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 21,
  //   lpSymbol: 'DAI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x56c77d59e82f33c712f919d09fceddf49660a829',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 29,
  //   lpSymbol: 'USDC-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x30479874f9320a62bce3bc0e315c920e1d73e278',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
