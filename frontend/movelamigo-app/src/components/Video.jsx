import React from 'react'
import video  from '../videos/814dc43e870597176cad645798825c03.mp4'
import foto from '../videos/792bd98f3e617786c850493560e11c45.jpg'
export default function Video() {

    return (
            <>
                <section className="video-capa video-help" id="home">
                    <div className="heroText">
                        <h1 className=" titulo-video text-white mt-2 mb-3" data-aos="fade-up" data-aos-delay="800">
                            Móvel Amigo
                        </h1>

                        <p className="text-secondary-white-color" data-aos="fade-up" data-aos-delay="1000">
                            "With a great power comes a great <strong className="custom-underline">responsability</strong>"
                        </p>
                    </div>
                    <div className="videoWrapper">
                    <video autoPlay loop muted className="custom-video" poster={foto}  controls preload='auto'>
                        <source src={video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    </div>

                    <div className="overlay"></div>
                    
                </section>
            </>
    )
}
