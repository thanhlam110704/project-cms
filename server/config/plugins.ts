module.exports = ({ env }) => ({
    'mux-video-uploader': {
      config: {
        accessTokenId: env('MUX_ACCESS_TOKEN_ID'),
        secretKey: env('MUX_SECRET_KEY'),
      },
    },
  });
  