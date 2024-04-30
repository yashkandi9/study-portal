import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Welcome to Student Study Portal, your ultimate destination for academic excellence and success.
                      </h2>
                      <p className="mt-6 text-gray-600">
                      At Student Study Portal, we're dedicated to empowering students on their educational journey by providing a comprehensive platform designed to enhance learning and foster growth.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Whether you're preparing for exams, exploring new subjects, or seeking additional support, Student Study Portal has everything you need to succeed. Our platform offers a wealth of tools and features to help you achieve your academic goals.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}