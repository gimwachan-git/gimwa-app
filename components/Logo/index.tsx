import { 
LogoContainer,
LogoCircleProgress,
LogoCircle,
LogoProgress,
Logomask
} from "components/Logo/styles";
import Router, { withRouter , useRouter } from 'next/router';
import React, {useEffect,useState} from 'react';
// import type { AppProps } from 'next/app'
// // import NProgress from 'nprogress';

export const Logo = () => {
  const router = useRouter();
  const pvalue = 628.319;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
      let speed = 1;

      function start() {
          setProgress(480);
          // NProgress.start();
          timer;
      }

      let timer = function increment() {
        setInterval(() => {
        if (speed <= 90) {
            speed += 1
            setProgress((speed:number) => {
            return pvalue*(1-speed*0.01)  
            }); 
        }
        }, 10)
      }

      function complete(timer: NodeJS.Timeout) {
        clearInterval(timer)
        setTimeout(() => {
            setProgress(0);
        }, 100)
        // NProgress.done();
      }

      router.events.on('routeChangeStart', start);
      router.events.on('routeChangeComplete', complete);
      router.events.on('routeChangeError', complete);

      return () => {
          
          router.events.off('routeChangeStart',start);
          router.events.off('routeChangeComplete',complete);
          router.events.off('routeChangeError',complete);
      };
  }, [router]);

    return (
        <Logomask>
            <LogoContainer>
                <svg width="100%" height="100%" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <path d="M110 215C167.99 215 215 167.99 215 110C215 52.0101 167.99 5 110 5C52.0101 5 5 52.0101 5 110C5 167.99 52.0101 215 110 215Z" stroke="#333333" stroke-width="10" stroke-miterlimit="10"/> */}
                    <path d="M56.5116 118.893C56.5116 150.795 80.4604 176.66 110 176.66V61.1255C80.4604 61.1255 56.5116 86.9907 56.5116 118.893Z" fill="#FFF0DF"/>
                    <path d="M110 61.1255V176.66C139.539 176.66 163.488 150.795 163.488 118.893C163.488 86.9907 139.539 61.1255 110 61.1255Z" fill="#FFE9D0"/>
                    <path d="M123.66 48.2651C124.209 48.6232 124.86 48.8326 125.567 48.8326C125.805 48.8326 126.033 48.8093 126.256 48.7628C125.767 48.8977 125.284 49.0372 124.8 49.186C124.423 48.8744 124.042 48.5674 123.66 48.2651Z" fill="#333333"/>
                    <path d="M110 184.893C96.0558 184.893 82.4046 179.684 71.5581 170.228C70.8325 169.595 70.5814 168.6 70.9163 167.702C71.2511 166.805 72.0884 166.228 73.0465 166.228H75.3395C75.8651 166.228 76.3767 166.414 76.7814 166.744C86.4232 174.665 97.907 178.851 109.995 178.851C122.084 178.851 133.572 174.665 143.209 166.744C143.614 166.409 144.126 166.228 144.651 166.228H146.944C147.902 166.228 148.74 166.809 149.074 167.702C149.414 168.605 149.163 169.595 148.433 170.228C137.595 179.684 123.944 184.893 110 184.893Z" fill="#666666"/>
                    <path d="M146.949 167.386C147.986 167.386 148.456 168.67 147.674 169.349C137.367 178.335 124.256 183.73 109.995 183.73C95.7349 183.73 82.6232 178.34 72.3163 169.349C71.5349 168.67 72.0093 167.386 73.0419 167.386H75.3349C75.5907 167.386 75.8372 167.474 76.0372 167.637C85.4837 175.395 97.2465 180.009 109.991 180.009C122.735 180.009 134.498 175.4 143.944 167.637C144.144 167.474 144.391 167.386 144.646 167.386H146.949ZM146.949 165.06H144.656C143.865 165.06 143.088 165.34 142.479 165.842C133.051 173.591 121.819 177.684 110.005 177.684C98.186 177.684 86.9581 173.591 77.5302 165.842C76.9163 165.34 76.1442 165.06 75.3535 165.06H73.0605C71.6139 165.06 70.3488 165.935 69.8419 167.293C69.3302 168.651 69.7116 170.149 70.8046 171.107C76.2372 175.842 82.307 179.535 88.8465 182.079C95.6279 184.721 102.749 186.056 110.014 186.056C117.279 186.056 124.4 184.716 131.181 182.079C137.721 179.535 143.791 175.842 149.223 171.107C150.321 170.154 150.698 168.656 150.186 167.293C149.665 165.935 148.4 165.06 146.949 165.06Z" fill="white"/>
                    <path d="M62.7535 156.558C62.7675 156.563 62.7768 156.572 62.7907 156.577C63.9535 157.135 65.0884 155.777 64.3768 154.707C61.4419 150.316 59.0326 145.484 57.2559 140.321C57.1675 140.07 57.0094 139.851 56.7907 139.702C56.5907 139.563 56.3908 139.419 56.1954 139.274C55.8559 139.028 55.5256 138.777 55.1908 138.521C54.2094 137.767 52.8326 138.74 53.2047 139.916C54.8838 145.209 57.1768 150.195 60.0001 154.772C60.0931 154.926 60.2187 155.06 60.3675 155.163C61.1303 155.693 61.9256 156.158 62.7535 156.558Z" fill="#E5E5E5"/>
                    <path d="M164.316 137.358C164.195 137.433 164.074 137.512 163.954 137.586C163.688 137.749 163.498 138 163.405 138.293C161.581 144.219 158.94 149.74 155.623 154.707C154.907 155.781 156.047 157.14 157.209 156.581C157.223 156.577 157.233 156.567 157.247 156.563C158.074 156.163 158.87 155.693 159.633 155.167C159.781 155.065 159.907 154.93 160 154.777C163.116 149.726 165.586 144.177 167.293 138.27C165.693 137.088 166.847 137.94 165.247 136.758C164.94 136.958 164.628 137.158 164.316 137.358Z" fill="#E5E5E5"/>
                    <g style={{mixBlendMode:"multiply"}}>
                    <path d="M104.958 146.409C104.321 155.339 96.4744 162.646 87.5209 162.646H69.4465C60.493 162.646 52.1303 155.395 50.8651 146.53L49.5116 137.065C48.2465 128.2 54.5349 120.949 63.4884 120.949H90.4977C99.4512 120.949 106.256 128.256 105.619 137.186L104.958 146.409Z" fill="#F2F2F2"/>
                    <path d="M169.135 146.53C167.87 155.395 159.507 162.646 150.553 162.646H133.079C124.126 162.646 116.172 155.349 115.409 146.428L114.614 137.172C113.851 128.251 120.549 120.953 129.502 120.953H156.512C165.465 120.953 171.753 128.205 170.488 137.07L169.135 146.53Z" fill="#F2F2F2"/>
                    </g>
                    <path d="M69.4465 166.293C68.9256 166.293 68.3768 166.27 67.7721 166.219C57.7628 165.381 48.8186 157.023 47.414 147.181L46.0605 137.716C45.8698 136.372 45.814 135.023 45.9023 133.712C45.9861 132.474 47.0186 131.502 48.2558 131.502C48.8465 131.502 49.4093 131.726 49.8512 132.13L50.2326 132.484C50.8047 133 51.4047 133.521 52.0093 134.023C52.5116 134.437 52.8233 135.056 52.8605 135.721C52.8791 136.065 52.9163 136.405 52.9628 136.73L54.3163 146.195C55 150.972 58.5116 155.544 63.2605 157.837C65.0698 158.712 66.9349 159.205 68.7954 159.298C69.014 159.307 69.2279 159.316 69.4465 159.316H86.414C94.2093 159.316 101.005 152.991 101.558 145.214L102.14 137.098C102.377 133.753 101.302 130.614 99.1023 128.256C96.9023 125.898 93.8512 124.595 90.4977 124.595H75.2884C74.5582 124.595 73.8837 124.265 73.4326 123.693C72.9861 123.121 72.8279 122.386 73 121.684C73.2093 120.842 73.4558 120.005 73.7395 119.186C74.0651 118.251 74.9535 117.619 75.9582 117.619H90.5023C95.8093 117.619 100.679 119.707 104.214 123.498C107.744 127.288 109.479 132.298 109.102 137.591L108.521 145.707C107.712 157.056 97.7954 166.288 86.4186 166.288H69.4465V166.293Z" fill="black"/>
                    <path d="M90.4977 118.781C95.4791 118.781 100.047 120.74 103.358 124.293C106.665 127.847 108.293 132.54 107.94 137.512L107.358 145.628C106.591 156.353 97.1674 165.13 86.414 165.13H73.1907H69.4465C68.9163 165.13 68.3907 165.102 67.8698 165.06C58.4 164.27 49.9163 156.484 48.5628 147.019L47.2093 137.553C47.0279 136.279 46.9768 135.019 47.0605 133.791C47.107 133.107 47.6651 132.67 48.2558 132.67C48.5349 132.67 48.8233 132.772 49.0651 132.991C49.0698 132.995 49.0744 133 49.0837 133.005C49.2093 133.121 49.3303 133.237 49.4558 133.349C50.0512 133.884 50.6558 134.409 51.2744 134.921C51.5349 135.135 51.6884 135.451 51.707 135.786C51.7302 136.153 51.7628 136.521 51.8186 136.893L53.1721 146.358C53.9396 151.726 57.8372 156.502 62.7628 158.884C64.6465 159.791 66.6744 160.353 68.7442 160.46C68.9814 160.474 69.2186 160.479 69.4558 160.479H86.4233C94.7954 160.479 102.13 153.647 102.726 145.298L103.307 137.181C103.567 133.512 102.381 130.06 99.9628 127.465C97.5442 124.865 94.1861 123.437 90.507 123.437H75.2977C74.5256 123.437 73.9535 122.712 74.1395 121.967C74.3395 121.153 74.5768 120.353 74.8465 119.572C75.0093 119.098 75.4651 118.786 75.9675 118.786H90.4977V118.781ZM90.4977 116.456H75.9535C74.4558 116.456 73.1209 117.4 72.6372 118.805C72.3442 119.656 72.0837 120.53 71.8698 121.405C71.6093 122.46 71.8465 123.553 72.5163 124.409C73.1861 125.265 74.1954 125.758 75.2837 125.758H90.493C93.5163 125.758 96.2698 126.926 98.2465 129.047C100.219 131.167 101.191 133.995 100.972 137.014L100.391 145.13C99.8791 152.312 93.6047 158.153 86.4047 158.153H69.4372C69.2465 158.153 69.0465 158.149 68.8419 158.14C67.1395 158.051 65.4279 157.6 63.7535 156.791C59.3442 154.66 56.0837 150.437 55.4558 146.033L54.1023 136.567C54.0605 136.274 54.0279 135.967 54.014 135.656C53.9582 134.674 53.493 133.753 52.7442 133.13C52.1489 132.637 51.5628 132.13 51.0047 131.623C50.9256 131.549 50.8419 131.474 50.7628 131.4L50.6465 131.293C49.9768 130.674 49.1303 130.34 48.2465 130.34C46.4 130.34 44.8558 131.786 44.7303 133.633C44.6372 135.023 44.693 136.451 44.8977 137.879L46.2512 147.344C46.9768 152.428 49.5814 157.274 53.5768 160.991C57.5442 164.679 62.5488 166.944 67.6651 167.372C68.3023 167.423 68.8837 167.451 69.4372 167.451H73.1814H86.4047C98.3768 167.451 108.814 157.735 109.67 145.791L110.251 137.674C110.651 132.051 108.805 126.74 105.051 122.707C101.302 118.679 96.1302 116.456 90.4977 116.456Z" fill="white"/>
                    <path d="M133.991 166.293C122.749 166.293 112.819 157.177 111.856 145.977L111.14 137.628C110.684 132.33 112.358 127.316 115.847 123.516C119.335 119.716 124.186 117.623 129.507 117.623H144.079C144.884 117.623 145.609 118.06 145.981 118.763C146.484 119.712 146.926 120.707 147.288 121.716C147.526 122.372 147.428 123.107 147.023 123.679C146.619 124.256 145.958 124.6 145.256 124.6H129.502C126.163 124.6 123.135 125.893 120.981 128.237C118.828 130.581 117.8 133.707 118.088 137.037L118.884 146.293C119.498 153.479 125.865 159.321 133.079 159.321H150.554C150.772 159.321 150.991 159.316 151.205 159.302C153.065 159.209 154.926 158.716 156.74 157.842C161.488 155.549 165 150.977 165.684 146.2L167.037 136.735C167.149 135.954 167.186 135.163 167.149 134.395C167.144 134.335 167.14 134.274 167.135 134.219L167.121 134.047C167.088 133.633 167.279 133.233 167.619 132.995C168.386 132.465 169.061 131.972 169.684 131.493L169.861 131.358C170.051 131.209 170.242 131.065 170.433 130.912C170.837 130.586 171.307 130.419 171.805 130.419C172.884 130.419 173.781 131.191 173.94 132.256C174.209 134.037 174.209 135.879 173.949 137.726L172.595 147.191C171.191 157.028 162.247 165.391 152.237 166.228C151.633 166.279 151.084 166.302 150.563 166.302H133.991V166.293Z" fill="black"/>
                    <path d="M144.074 118.781C144.437 118.781 144.781 118.977 144.949 119.302C145.423 120.205 145.842 121.14 146.191 122.107C146.423 122.749 145.94 123.433 145.251 123.433H129.498C125.828 123.433 122.498 124.856 120.121 127.442C117.744 130.028 116.609 133.47 116.926 137.126L117.721 146.381C118.386 154.153 125.274 160.474 133.074 160.474H150.549C150.786 160.474 151.023 160.47 151.26 160.456C153.326 160.349 155.358 159.791 157.242 158.879C162.167 156.502 166.065 151.721 166.828 146.353L168.181 136.888C168.307 136.019 168.344 135.163 168.302 134.326C168.298 134.195 168.279 134.07 168.27 133.94C168.986 133.442 169.693 132.935 170.381 132.4C170.637 132.2 170.898 132.005 171.149 131.8C171.154 131.795 171.158 131.791 171.163 131.791C171.354 131.637 171.577 131.567 171.791 131.567C172.256 131.567 172.698 131.893 172.777 132.414C173.028 134.065 173.033 135.786 172.781 137.544L171.428 147.009C170.074 156.474 161.591 164.26 152.121 165.051C151.595 165.093 151.07 165.121 150.544 165.121H146.8H133.977C123.349 165.121 113.912 156.456 113 145.87L112.284 137.521C111.856 132.549 113.423 127.851 116.688 124.293C119.954 120.735 124.502 118.777 129.488 118.777H144.074V118.781ZM144.074 116.456H129.502C123.856 116.456 118.698 118.684 114.986 122.726C111.274 126.767 109.498 132.093 109.977 137.721L110.693 146.07C111.702 157.86 122.154 167.451 133.986 167.451H146.809H150.554C151.107 167.451 151.688 167.423 152.326 167.372C157.442 166.944 162.442 164.679 166.414 160.991C170.414 157.274 173.014 152.428 173.74 147.344L175.093 137.879C175.372 135.921 175.372 133.967 175.084 132.074C174.837 130.437 173.456 129.247 171.795 129.247C171.037 129.247 170.298 129.512 169.702 129.986C169.507 130.144 169.321 130.288 169.135 130.433L168.963 130.567C168.363 131.033 167.702 131.512 166.949 132.033C166.265 132.502 165.888 133.302 165.954 134.13C165.958 134.195 165.967 134.265 165.972 134.33C165.977 134.367 165.981 134.409 165.981 134.447C166.014 135.144 165.981 135.856 165.879 136.563L164.526 146.028C163.898 150.433 160.637 154.656 156.228 156.786C154.558 157.595 152.847 158.046 151.14 158.135C150.94 158.144 150.74 158.149 150.544 158.149H133.07C126.447 158.149 120.6 152.781 120.033 146.181L119.237 136.926C118.981 133.926 119.902 131.116 121.828 129.014C123.758 126.912 126.479 125.753 129.488 125.753H145.242C146.321 125.753 147.34 125.223 147.963 124.34C148.581 123.456 148.735 122.326 148.367 121.312C147.986 120.251 147.521 119.205 146.995 118.209C146.433 117.13 145.312 116.456 144.074 116.456Z" fill="white"/>
                    <path d="M77.7442 147.716C77.6651 147.716 77.586 147.707 77.507 147.693C69.5163 146.033 62.1116 142.735 55.5023 137.884C53.9488 136.744 52.4325 135.507 51 134.214L50.6186 133.865C49.386 132.73 48.186 131.526 47.0605 130.288C37.3814 119.66 32.1209 105.888 32.2418 91.4977C32.507 60.6558 57.8139 35.3628 88.6558 35.1116H89.1256C102.205 35.1116 114.935 39.6465 125.051 47.893C129.544 46.5628 134.214 45.8884 138.944 45.8884C139.26 45.8884 139.577 45.893 139.893 45.8977C152.488 46.1349 164.377 51.2047 173.367 60.1721C182.358 69.1395 187.465 81.0093 187.744 93.6047C188.046 107.247 182.572 120.488 172.726 129.93C171.712 130.902 170.642 131.842 169.553 132.721C169.353 132.884 169.149 133.042 168.944 133.2L168.772 133.335C167.521 134.302 166.233 135.205 164.935 136.023C159.242 139.614 152.995 141.944 146.372 142.958C146.312 142.967 146.256 142.972 146.195 142.972C145.805 142.972 145.433 142.772 145.219 142.437C144.972 142.051 144.972 141.554 145.228 141.172C147.484 137.744 148.674 133.758 148.674 129.647C148.674 127.66 148.391 125.684 147.833 123.767C147.386 122.237 146.763 120.754 145.977 119.363C144.567 116.856 142.698 114.707 140.423 112.963C136.73 110.135 132.316 108.637 127.66 108.637C124.553 108.637 121.558 109.302 118.753 110.619C118.595 110.693 118.428 110.73 118.26 110.73C117.949 110.73 117.646 110.605 117.419 110.372C112.409 105.144 105.67 102.265 98.4418 102.265C96.3116 102.265 94.1814 102.526 92.107 103.037C83.7581 105.102 76.9395 111.149 73.8698 119.205C73.3209 120.647 72.8977 122.144 72.6139 123.656C72.307 125.279 72.1535 126.926 72.1535 128.549C72.1535 134.888 74.4465 141.009 78.6093 145.795C78.9349 146.172 78.986 146.716 78.7349 147.144C78.5349 147.502 78.1535 147.716 77.7442 147.716Z" fill="#333333"/>
                    <path d="M89.1256 36.2698C102.693 36.2698 115.13 41.121 124.795 49.1814C129.265 47.7907 134.019 47.0465 138.949 47.0465C139.256 47.0465 139.567 47.0512 139.879 47.0558C165.298 47.5396 186.028 68.2047 186.591 93.6233C186.898 107.567 181.209 120.186 171.93 129.088C170.94 130.042 169.907 130.949 168.833 131.814C168.581 132.019 168.321 132.214 168.065 132.414C166.86 133.344 165.614 134.223 164.321 135.037C158.916 138.442 152.781 140.8 146.205 141.805C148.502 138.312 149.842 134.135 149.842 129.642C149.842 127.488 149.53 125.409 148.953 123.437C148.474 121.8 147.819 120.242 146.995 118.786C145.516 116.158 143.521 113.86 141.14 112.033C137.405 109.172 132.74 107.47 127.67 107.47C124.307 107.47 121.126 108.223 118.27 109.558C113.274 104.344 106.246 101.093 98.4558 101.093C96.1767 101.093 93.9581 101.377 91.8418 101.902C83.0698 104.074 75.9674 110.46 72.8 118.786C72.2325 120.279 71.7907 121.833 71.4884 123.437C71.1767 125.093 71.0093 126.8 71.0093 128.549C71.0093 135.442 73.5581 141.74 77.7535 146.558C69.8232 144.912 62.507 141.577 56.2 136.954C54.6698 135.828 53.1953 134.628 51.7907 133.358C51.6651 133.247 51.5395 133.13 51.4186 133.014C50.2046 131.898 49.0418 130.726 47.9302 129.507C38.8093 119.493 33.2884 106.149 33.4139 91.5117C33.6744 61.2419 58.4046 36.521 88.6744 36.2791C88.8232 36.2744 88.9721 36.2698 89.1256 36.2698ZM89.1256 33.9442H89.1163C88.9581 33.9442 88.8046 33.9442 88.6465 33.9442C73.3907 34.0651 59.0046 40.1163 48.1349 50.9814C37.2698 61.8465 31.2093 76.2326 31.0791 91.4884C30.9535 106.167 36.3209 120.228 46.2 131.07C47.3535 132.335 48.5721 133.563 49.8325 134.721L49.9442 134.823C50.0372 134.907 50.1302 134.995 50.2232 135.079C51.6884 136.4 53.2325 137.66 54.8186 138.823C61.5628 143.772 69.1163 147.14 77.2744 148.833C77.4325 148.865 77.5907 148.879 77.7488 148.879C78.5628 148.879 79.3302 148.451 79.7535 147.73C80.2558 146.87 80.1581 145.781 79.5023 145.028C75.5209 140.456 73.3302 134.6 73.3302 128.544C73.3302 126.991 73.4791 125.414 73.7721 123.865C74.0465 122.419 74.4465 120.986 74.9721 119.609C77.907 111.907 84.4186 106.13 92.4 104.158C94.3814 103.67 96.4186 103.419 98.4558 103.419C105.363 103.419 111.805 106.172 116.591 111.167C117.037 111.637 117.651 111.884 118.27 111.884C118.605 111.884 118.94 111.814 119.256 111.665C121.902 110.423 124.73 109.795 127.67 109.795C132.07 109.795 136.237 111.209 139.726 113.879C141.874 115.526 143.637 117.558 144.972 119.926C145.712 121.242 146.302 122.642 146.721 124.084C147.246 125.893 147.516 127.758 147.516 129.637C147.516 133.521 146.391 137.284 144.26 140.521C143.753 141.288 143.749 142.279 144.246 143.056C144.679 143.73 145.419 144.126 146.205 144.126C146.321 144.126 146.437 144.116 146.558 144.098C153.34 143.06 159.735 140.674 165.563 136.995C166.888 136.158 168.209 135.233 169.488 134.247L169.651 134.121C169.865 133.954 170.079 133.791 170.288 133.619C171.405 132.721 172.498 131.758 173.535 130.763C178.479 126.019 182.335 120.433 184.991 114.149C187.749 107.633 189.065 100.707 188.907 93.5675C188.623 80.6744 183.395 68.5163 174.191 59.3396C164.986 50.1628 152.814 44.9721 139.916 44.7303C139.591 44.7256 139.265 44.721 138.944 44.721C134.307 44.721 129.726 45.3535 125.307 46.6047C115.065 38.4326 102.27 33.9489 89.1256 33.9442Z" fill="white"/>
                </svg>
                <LogoProgress width="100%" height="100%" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <LogoCircle r="100" cx="50%" cy="50%"></LogoCircle>
                    <LogoCircleProgress r="100" cx="50%" cy="50%" style={{
                        strokeDashoffset: `${progress}`,
                        // transition: progress > 0 && progress < 628.319 ? ".3s" : "0s",
                    }}></LogoCircleProgress>
                </LogoProgress>
            </LogoContainer>
        </Logomask>

    )
}
