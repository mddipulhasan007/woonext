import React from "react";
import CartItems from "@/components/checkout/CartItems";


function Page(props) {

  return (
    <main className="relative flex-grow bg-gray-100">
      <div className="py-10 2xl:py-12 checkout mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
        <div className="flex flex-col mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 grid-cols-1 flex-wrap gap-8">
            <div className="w-full col-start-1 col-end-10">
              <div className="border rounded-md border-border-base text-brand-light">
                <div className="accordion__panel border-b border-border-base expanded">
                  <div
                    id="index_0"
                    className="flex items-center p-4 pb-6 cursor-pointer sm:p-8 accordion__button"
                  >
                    <span className="flex items-center justify-center font-semibold border-2 border-brand-dark rounded-full h-9 w-9 text-brand-dark ltr:mr-3 rtl:ml-3">
                      1
                    </span>
                    <h3 className="text-fill-base text-sm font-semibold">
                      Shipping Address
                    </h3>
                  </div>
                  <div
                    data-aria-label="index_0"
                    className="pb-6 ltr:pl-5 rtl:pr-5 sm:ltr:pl-9 sm:rtl:pr-9 lg:ltr:pl-20 lg:rtl:pr-20 sm:ltr:pr-9 sm:rtl:pl-9 ltr:pr-5 rtl:pl-5 accordion__content"
                  >
                    <div className="mb-6">
                      <div className="flex flex-col justify-between h-full -mt-4 text-15px md:mt-0">
                        <div
                          className="space-y-4 md:grid md:grid-cols-2 md:gap-5 auto-rows-auto md:space-y-0"
                          id="headlessui-radiogroup-:rt:"
                          role="radiogroup"
                          aria-labelledby="headlessui-label-:ru:"
                        >
                          <label
                            className="sr-only"
                            id="headlessui-label-:ru:"
                            role="none"
                          >
                            address
                          </label>
                          <div
                            className="border-brand  border-2 relative focus:outline-none rounded-md p-5 block cursor-pointer min-h-[112px] h-full group address__box"
                            id="headlessui-radiogroup-option-:rv:"
                            role="radio"
                            aria-checked="true"
                            tabIndex={0}
                            data-headlessui-state="checked"
                            aria-labelledby="headlessui-label-:r10:"
                            aria-describedby="headlessui-description-:r11:"
                          >
                            <h3
                              className="mb-2 -mt-1 font-semibold text-brand-dark "
                              id="headlessui-label-:r10:"
                            >
                              Home
                            </h3>
                            <div
                              className="leading-6 text-brand-muted"
                              id="headlessui-description-:r11:"
                            >
                              Acme Widgets 123 Widget Street Acmeville, AC 12345
                              United States of America
                            </div>
                            <div className="absolute z-10 flex transition-all ltr:right-3 rtl:left-3 top-3 lg:opacity-0 address__actions">
                              <button className="flex items-center justify-center w-6 h-6 text-base rounded-full bg-brand text-brand-light text-opacity-80">
                                <span className="sr-only">Home</span>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  version="1.2"
                                  baseProfile="tiny"
                                  viewBox="0 0 24 24"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div
                            className="border-border-base
            border-2 relative focus:outline-none rounded-md p-5 block cursor-pointer min-h-[112px] h-full group address__box"
                            id="headlessui-radiogroup-option-:r12:"
                            role="radio"
                            aria-checked="false"
                            tabIndex={-1}
                            data-headlessui-state=""
                            aria-labelledby="headlessui-label-:r13:"
                            aria-describedby="headlessui-description-:r14:"
                          >
                            <h3
                              className="mb-2 -mt-1 font-semibold text-brand-dark "
                              id="headlessui-label-:r13:"
                            >
                              Office
                            </h3>
                            <div
                              className="leading-6 text-brand-muted"
                              id="headlessui-description-:r14:"
                            >
                              Acme Widgets 890 Widget Street Acmeville, AC 213
                              United States of America.
                            </div>
                            <div className="absolute z-10 flex transition-all ltr:right-3 rtl:left-3 top-3 lg:opacity-0 address__actions">
                              <button className="flex items-center justify-center w-6 h-6 text-base rounded-full bg-brand text-brand-light text-opacity-80">
                                <span className="sr-only">Office</span>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  version="1.2"
                                  baseProfile="tiny"
                                  viewBox="0 0 24 24"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <button
                            className="w-full border-2 transition-all border-border-base rounded font-semibold p-5 px-10 cursor-pointer text-brand flex justify-start hover:border-brand items-center min-h-[112px] h-full"
                            role="none"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ltr:mr-2 rtl:ml-2"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                              role="none"
                            >
                              <path
                                d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"
                                role="none"
                              />
                              <path
                                d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"
                                role="none"
                              />
                            </svg>
                            Add Address
                          </button>
                        </div>
                        <div className="flex mt-5 sm:justify-end md:mt-10 lg:mt-20 save-change-button">
                          <button
                            data-variant="primary"
                            className="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand text-brand-light tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 w-full sm:w-auto"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="ltr:text-right rtl:text-left">
                      <button
                        data-variant="formButton"
                        className="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 px-4 py-3 text-sm font-semibold rounded bg-brand text-brand-light"
                      >
                        Next Steps
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion__panel border-b border-border-base collapsed
      "
                >
                  <div
                    id="index_1"
                    className="flex items-center p-4 pb-6 cursor-pointer sm:p-8 accordion__button"
                  >
                    <span className="flex items-center justify-center font-semibold border-2 border-brand-dark rounded-full h-9 w-9 text-brand-dark ltr:mr-3 rtl:ml-3">
                      2
                    </span>
                    <h3 className="text-fill-base text-sm font-semibold">
                      Delivery Schedule
                    </h3>
                  </div>
                  <div
                    data-aria-label="index_1"
                    className="pb-6 ltr:pl-5 rtl:pr-5 sm:ltr:pl-9 sm:rtl:pr-9 lg:ltr:pl-20 lg:rtl:pr-20 sm:ltr:pr-9 sm:rtl:pl-9 ltr:pr-5 rtl:pl-5 accordion__content"
                  >
                    <div className="mb-6">
                      <div className="w-full">
                        <div className="w-full mx-auto">
                          <div
                            id="headlessui-radiogroup-:r4:"
                            role="radiogroup"
                            aria-labelledby="headlessui-label-:r5:"
                          >
                            <label
                              className="sr-only"
                              id="headlessui-label-:r5:"
                              role="none"
                            >
                              Delivery Schedule
                            </label>
                            <div
                              className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6"
                              role="none"
                            >
                              <div
                                className="relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none bg-brand text-brand-light"
                                id="headlessui-radiogroup-option-:r6:"
                                role="radio"
                                aria-checked="true"
                                tabIndex={0}
                                data-headlessui-state="checked"
                                aria-labelledby="headlessui-label-:r7:"
                                aria-describedby="headlessui-description-:r8:"
                              >
                                <div className="text-center">
                                  <p
                                    className="text-base font-semibold  text-brand-light"
                                    id="headlessui-label-:r7:"
                                  >
                                    Sat
                                  </p>
                                  <span
                                    className="text-15px text-brand-light"
                                    id="headlessui-description-:r8:"
                                  >
                                    {" "}
                                    Jul 03
                                  </span>
                                </div>
                              </div>
                              <div
                                className="relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none bg-gray-100"
                                id="headlessui-radiogroup-option-:r9:"
                                role="radio"
                                aria-checked="false"
                                tabIndex={-1}
                                data-headlessui-state=""
                                aria-labelledby="headlessui-label-:ra:"
                                aria-describedby="headlessui-description-:rb:"
                              >
                                <div className="text-center">
                                  <p
                                    className="text-base font-semibold  text-gray-900"
                                    id="headlessui-label-:ra:"
                                  >
                                    Sun
                                  </p>
                                  <span
                                    className="text-15px text-gray-500"
                                    id="headlessui-description-:rb:"
                                  >
                                    {" "}
                                    Jul 04
                                  </span>
                                </div>
                              </div>
                              <div
                                className="relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none bg-gray-100"
                                id="headlessui-radiogroup-option-:rc:"
                                role="radio"
                                aria-checked="false"
                                tabIndex={-1}
                                data-headlessui-state=""
                                aria-labelledby="headlessui-label-:rd:"
                                aria-describedby="headlessui-description-:re:"
                              >
                                <div className="text-center">
                                  <p
                                    className="text-base font-semibold  text-gray-900"
                                    id="headlessui-label-:rd:"
                                  >
                                    Mon
                                  </p>
                                  <span
                                    className="text-15px text-gray-500"
                                    id="headlessui-description-:re:"
                                  >
                                    {" "}
                                    Jul 05
                                  </span>
                                </div>
                              </div>
                              <div
                                className="relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none bg-gray-100"
                                id="headlessui-radiogroup-option-:rf:"
                                role="radio"
                                aria-checked="false"
                                tabIndex={-1}
                                data-headlessui-state=""
                                aria-labelledby="headlessui-label-:rg:"
                                aria-describedby="headlessui-description-:rh:"
                              >
                                <div className="text-center">
                                  <p
                                    className="text-base font-semibold  text-gray-900"
                                    id="headlessui-label-:rg:"
                                  >
                                    Tus
                                  </p>
                                  <span
                                    className="text-15px text-gray-500"
                                    id="headlessui-description-:rh:"
                                  >
                                    {" "}
                                    Jul 06
                                  </span>
                                </div>
                              </div>
                              <div
                                className="relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none bg-gray-100"
                                id="headlessui-radiogroup-option-:ri:"
                                role="radio"
                                aria-checked="false"
                                tabIndex={-1}
                                data-headlessui-state=""
                                aria-labelledby="headlessui-label-:rj:"
                                aria-describedby="headlessui-description-:rk:"
                              >
                                <div className="text-center">
                                  <p
                                    className="text-base font-semibold  text-gray-900"
                                    id="headlessui-label-:rj:"
                                  >
                                    Wed
                                  </p>
                                  <span
                                    className="text-15px text-gray-500"
                                    id="headlessui-description-:rk:"
                                  >
                                    {" "}
                                    Jul 07{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="mt-10"
                            id="headlessui-radiogroup-:rl:"
                            role="radiogroup"
                            aria-labelledby="headlessui-label-:rm:"
                          >
                            <label
                              className="sr-only"
                              id="headlessui-label-:rm:"
                              role="none"
                            >
                              Delivery Schedule
                            </label>
                            <div
                              className="flex flex-wrap justify-between grid-cols-2 gap-4 lg:grid sm:grid-cols-3 lg:grid-cols-5"
                              role="none"
                            >
                              <div
                                className="cursor-pointer focus:outline-none"
                                id="headlessui-radiogroup-option-:rn:"
                                role="radio"
                                aria-checked="true"
                                tabIndex={0}
                                data-headlessui-state="checked"
                                aria-labelledby="headlessui-label-:ro:"
                              >
                                <div className="flex items-center">
                                  <span className="flex w-6 h-6 rounded-full border-[6px] border-brand" />
                                  <p
                                    className="text-sm text-black ltr:ml-2 rtl:mr-2"
                                    id="headlessui-label-:ro:"
                                  >
                                    9am to 10am
                                  </p>
                                </div>
                              </div>
                              <div
                                className="cursor-pointer focus:outline-none"
                                id="headlessui-radiogroup-option-:rp:"
                                role="radio"
                                aria-checked="false"
                                tabIndex={-1}
                                data-headlessui-state=""
                                aria-labelledby="headlessui-label-:rq:"
                              >
                                <div className="flex items-center">
                                  <span className="flex w-6 h-6 rounded-full border-2 border-gray-200" />
                                  <p
                                    className="text-sm text-black ltr:ml-2 rtl:mr-2"
                                    id="headlessui-label-:rq:"
                                  >
                                    3pm to 5pm
                                  </p>
                                </div>
                              </div>
                              <div
                                className="cursor-pointer focus:outline-none"
                                id="headlessui-radiogroup-option-:rr:"
                                role="radio"
                                aria-checked="false"
                                tabIndex={-1}
                                data-headlessui-state=""
                                aria-labelledby="headlessui-label-:rs:"
                              >
                                <div className="flex items-center">
                                  <span className="flex w-6 h-6 rounded-full border-2 border-gray-200" />
                                  <p
                                    className="text-sm text-black ltr:ml-2 rtl:mr-2"
                                    id="headlessui-label-:rs:"
                                  >
                                    6pm to 8pm
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ltr:text-right rtl:text-left">
                      <button
                        data-variant="formButton"
                        className="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 px-4 py-3 text-sm font-semibold rounded bg-brand text-brand-light"
                      >
                        Next Steps
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion__panel border-b border-border-base collapsed
      "
                >
                  <div
                    id="index_2"
                    className="flex items-center p-4 pb-6 cursor-pointer sm:p-8 accordion__button"
                  >
                    <span className="flex items-center justify-center font-semibold border-2 border-brand-dark rounded-full h-9 w-9 text-brand-dark ltr:mr-3 rtl:ml-3">
                      3
                    </span>
                    <h3 className="text-fill-base text-sm font-semibold">
                      Payment
                    </h3>
                  </div>
                  <div
                    data-aria-label="index_2"
                    className="pb-6 ltr:pl-5 rtl:pr-5 sm:ltr:pl-9 sm:rtl:pr-9 lg:ltr:pl-20 lg:rtl:pr-20 sm:ltr:pr-9 sm:rtl:pl-9 ltr:pr-5 rtl:pl-5 accordion__content"
                  >
                    <div className="mb-6">
                      <div className="w-full bg-white rounded-xl xl:w-[500px]">
                        <h3 className="text-brand-dark opacity-60 mb-3">
                          Enter card info
                        </h3>
                        <div
                          className="StripeElement StripeElement--invalid"
                          style={{}}
                        >
                          <div
                            className="__PrivateStripeElement"
                            style={{
                              margin: "0px !important",
                              padding: "0px !important",
                              border: "none !important",
                              display: "block !important",
                              background: "transparent !important",
                              position: "relative !important",
                              opacity: "1 !important",
                            }}
                          >
                            <iframe
                              name="__privateStripeFrame1483"
                              frameBorder={0}
                              allowTransparency="true"
                              scrolling="no"
                              role="presentation"
                              allow="payment *"
                              src="https://js.stripe.com/v3/elements-inner-card-81e1f9decf1a3b13e48bc705f3005b71.html#wait=false&mids[guid]=1b9f5846-9016-4892-9a3f-f0f169ad6d11d802d5&mids[muid]=3b6ec4a3-fc00-4135-86b8-ef3b615dc207a488b3&mids[sid]=c0617f4f-0eae-47ed-9088-e30188cdb13be02d85&rtl=false&componentName=card&keyMode=test&apiKey=pk_test_TYooMQauvdEDq54NiTphI7jx&referrer=https%3A%2F%2Fuminex-digital.vercel.app%2Fen%2Fcheckout&controllerId=__privateStripeController1481"
                              title="Secure card payment input frame"
                              style={{
                                border: "0px !important",
                                marginTop: "0.601562px",
                                marginRight: "0px !important",
                                marginBottom: "0px !important",
                                marginLeft: "0px !important",
                                padding: "0px !important",
                                width: "1px !important",
                                minWidth: "100% !important",
                                overflow: "hidden !important",
                                display: "block !important",
                                userSelect: "none !important",
                                transform: "translate(0px) !important",
                                colorScheme: "light only !important",
                                height: "16.8px",
                              }}
                              __idm_id__={630785}
                            />
                            <input
                              className="__PrivateStripeElement-input"
                              aria-hidden="true"
                              aria-label=" "
                              autoComplete="false"
                              maxLength={1}
                              style={{
                                border: "none !important",
                                display: "block !important",
                                position: "absolute !important",
                                height: "1px !important",
                                top: "-1px !important",
                                left: "0px !important",
                                padding: "0px !important",
                                margin: "0px !important",
                                width: "100% !important",
                                opacity: "0 !important",
                                background: "transparent !important",
                                pointerEvents: "none !important",
                                fontSize: "16px !important",
                              }}
                            />
                          </div>
                        </div>
                        <button
                          data-variant="formButton"
                          className="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 h-11 md:h-12  mt-5"
                          type="button"
                        >
                          Pay Now
                        </button>
                      </div>
                    </div>
                    <div className="ltr:text-right rtl:text-left">
                      <button
                        data-variant="formButton"
                        className="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 px-4 py-3 text-sm font-semibold rounded bg-brand text-brand-light"
                      >
                        Next Steps
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion__panel  collapsed
      "
                >
                  <div
                    id="index_3"
                    className="flex items-center p-4 pb-6 cursor-pointer sm:p-8 accordion__button"
                  >
                    <span className="flex items-center justify-center font-semibold border-2 border-brand-dark rounded-full h-9 w-9 text-brand-dark ltr:mr-3 rtl:ml-3">
                      4
                    </span>
                    <h3 className="text-fill-base text-sm font-semibold">
                      Delivery Instructions
                    </h3>
                  </div>
                  <div
                    data-aria-label="index_3"
                    className="pb-6 ltr:pl-5 rtl:pr-5 sm:ltr:pl-9 sm:rtl:pr-9 lg:ltr:pl-20 lg:rtl:pr-20 sm:ltr:pr-9 sm:rtl:pl-9 ltr:pr-5 rtl:pl-5 accordion__content"
                  >
                    <div className="mb-6">
                      <div className="w-full">
                        <div className="w-full mx-auto">
                          <form noValidate="">
                            <div className="mb-6">
                              <div>
                                <label
                                  htmlFor="instructionNote"
                                  className="block text-brand-dark opacity-70 font-normal text-13px lg:text-sm leading-none mb-3 cursor-pointer"
                                >
                                  Delivery Instructions Note
                                </label>
                                <textarea
                                  id="instructionNote"
                                  name="instructionNote"
                                  className="px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-brand-dark text-13px lg:text-sm focus:outline-none focus:ring-0 placeholder-[#B3B3B3] bg-white border border-border-two focus:shadow focus:outline-none focus:border-heading focus:border-2 focus:outline-none focus:border-brand"
                                  autoComplete="off"
                                  spellCheck="false"
                                  rows={4}
                                  placeholder=""
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="mb-6">
                              <input
                                id="default-type"
                                className="w-5 h-5 transition duration-500 ease-in-out border border-gray-300 rounded cursor-pointer form-checkbox focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none focus:checked:bg-brand hover:checked:bg-brand checked:bg-brand"
                                type="checkbox"
                                name="default"
                              />
                              <label
                                htmlFor="default-type"
                                className="font-medium align-middle ltr:ml-3 rtl:mr-3 text-brand-dark text-15px"
                              >
                                Leave at my door if I am not around
                              </label>
                              <p className="text-sm leading-7 lg:leading-[1.85em] ltr:ml-8 rtl:mr-8 pt-2.5">
                                By selecting this option you accept full
                                responsibility for your order after it has been
                                delivered unattended, including any loss due to
                                theft or damage due to temperature sensitivity.
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CartItems/>
          </div>
        </div>
      </div>
      <div className="border-t border-border-base " />
    </main>
  );
}

export default Page;
