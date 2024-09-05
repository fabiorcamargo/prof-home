"use client";

import { useEffect } from 'react';
import Image from 'next/image';

const Newsletter = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!window.MauticSDKLoaded) {
                window.MauticSDKLoaded = true;
                const head = document.getElementsByTagName('head')[0];
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://mautic.profissionalizaead.com.br/media/js/mautic-form.js?va14f9b4e';
                script.onload = function () {
                    if (typeof window.MauticSDK !== 'undefined') {
                        window.MauticSDK.onLoad();
                    }
                };
                head.appendChild(script);

                window.MauticDomain = 'https://mautic.profissionalizaead.com.br';
                window.MauticLang = { 'submittingMessage': 'Por favor, aguarde...' };
            } else if (typeof window.MauticSDK !== 'undefined') {
                window.MauticSDK.onLoad();
            }
        }
    }, []);

    return (
        <div className="mt-32 ">
            <div id="join-section" className='-mt-32 relative z-10'>
                <div className="mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-orange rounded-lg bg-newsletter">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">

                        {/* COLUMN-1 */}
                        <div>
                            <h3 className="text-5xl font-bold mb-3"> Receba nossas atualizações </h3>
                            <h4 className="text-lg font-medium mb-7">Deixe seu email para receber conteúdos sobre o mercado de trabalho e promoções.</h4>
                            <form role="form" method="post" action="https://mautic.profissionalizaead.com.br/form/submit?formId=1" id="mauticform_newsletter" data-mautic-form="newsletter">
                                <div className="mauticform-error" id="mauticform_newsletter_error"></div>
                                <div className='bg-green text-white pl-2 mb-2'>
                                <div className="mauticform-message my-2" id="mauticform_newsletter_message"></div>
                                </div>


                                    <div className="">
                                        <div id="mauticform_newsletter_email" className="mauticform-row mauticform-email mauticform-field-1 mauticform-required" data-validate="email" data-validation-type="email">
                                            <input type="Email address" name="mauticform[email]" id='mauticform_input_newsletter_email' className="py-4 text-sm w-full text-black bg-white rounded-md pl-4" placeholder="Insira Seu Email" autoComplete="on" />
                                            <div className='bg-red'>
                                                <span className="mauticform-errormsg text-white bg-red-600 p-2 rounded mt-1 block font-bold" style={{ display: 'none' }}>Isso é obrigatório.</span>
                                            </div>
                                        </div>
                                        <div id="mauticform_newsletter_submit" className="mauticform-row mauticform-button-wrapper mauticform-field-2 pt-3">
                                            <button className="bg-purple hover:bg-blue-700 text-white font-medium py-2 px-4 rounded" name="mauticform[submit]" value="1" id="mauticform_input_newsletter_submit" type="submit">Enviar</button>
                                        </div>
                                    </div>
                                <input type="hidden" name="mauticform[formId]" id="mauticform_newsletter_id" value="1" />
                                <input type="hidden" name="mauticform[return]" id="mauticform_newsletter_return" value="" />
                                <input type="hidden" name="mauticform[formName]" id="mauticform_newsletter_name" value="newsletter" />
                            </form>



                        </div>

                    </div>

                    {/* COLUMN-2 */}
                    <div className='hidden sm:block'>
                        <div className='float-right -mt-32'>
                            <Image src={'/assets/newsletter/News2.png'} alt="bgimg" width={500} height={300} />
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default Newsletter;
