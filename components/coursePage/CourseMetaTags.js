import Head from "next/head";

export default function MetaTags({ data }) {
  // console.log(data, 'schema marks*******');
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="dns-prefetch" href="https://ssl.google-analytics.com" />

      {/* <link rel="stylesheet" href="global.css" /> */}

      <link rel="canonical" href={data?.overview?.url_title} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data?.overview?.meta_title} />
      <meta property="og:description" content={data?.overview?.meta_desc} />
      <meta
        property="og:url"
        content={`https://tekslate.com/${data?.overview?.url_title}`}
      />
      <meta property="og:site_name" content="Tekslate" />
      <meta property="og:image" content={data?.overview?.image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tekslatetutor" />
      <meta name="twitter:title" content={data?.overview?.meta_title} />
      <meta name="twitter:description" content={data?.overview?.meta_desc} />
      <meta name="twitter:image" content={data?.overview?.image} />
      {/*Twitter img creator */}
      <meta name="twitter:creator" content="@tekslatetutor" />

      {/*Need site verification code and logo done */}
      {/* <meta
        name="google-site-verification"
        content="BZ-jPAsXefeGHPj5Bf_si_WAALH2fm8mlB_TjIhXpJ36lE"
      /> */}

      <link
        rel="shortcut icon"
        href="https://tekslateassets.s3.amazonaws.com/images/favicon.svg"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://tekslateassets.s3.amazonaws.com/images/favicon.svg"
      />

      <title>{data?.overview?.meta_title}</title>

      <meta name="description" content={data?.overview?.meta_desc} />

      <meta name="theme-color" content="#e94850" />

      {/* schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "${data.overview?.course}",
            "speakable": {
                "@type": "SpeakableSpecification",
                "xpath": [
                    "/html/head/title",
                    "/html/head/meta[@name='description']/@content"
                ]
            },
            "url": "https://mindmajix.com/${data.overview?.url_title}"
        }
    `,
        }}
      />

      {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                "@context": "https://schema.org",
                "@type": "VideoObject",
                "name": "${data.overview?.video_schema_name
                            ? data.overview.video_schema_name
                            : data.overview?.course
                        }",
                "description": "${data.overview?.video_schema_description
                            ? data.overview?.video_schema_description
                            : data.overview?.meta_desc
                        }",
                "thumbnailUrl": "https://img.youtube.com/${data.overview?.video
                        }/hqdefault.jpg",
                "uploadDate": "${data.overview?.video_schema_upload_date
                            ? data.overview?.video_schema_upload_date
                            : new Date().toLocaleDateString()
                        }",
                "publisher": {
                    "@type": "Organization",
                    "name": "Tekslate",
                "logo": {
                "@type": "ImageObject",
                "url": "https://img.youtube.com/${data.overview?.video
                        }/hqdefault.jpg",
                "width": 160,
                "height": 90
                    }
                },
                "contentUrl": "https://www.youtube.com/embed/${data.overview?.video
                        }",
                "embedUrl"  : "https://www.youtube.com/embed/${data.overview?.video
                        }"
            }
    `,
                }}
            /> */}
    </Head>
  );
}
