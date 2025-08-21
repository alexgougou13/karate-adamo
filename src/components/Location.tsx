import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { Labels } from '../data/labels';
import { images } from '../data/images';

interface LocationProps {
  labels: Labels;
}

const Location: React.FC<LocationProps> = ({ labels }) => {
  const schedule = [
    labels.location.monday,
    labels.location.tuesday,
    labels.location.wednesday,
    labels.location.thursday,
    labels.location.friday,
    labels.location.saturday,
    labels.location.sunday
  ];

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {labels.location.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {labels.location.address}
                </h3>
                <p className="text-gray-600">
                  {labels.location.address}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <Calendar className="w-5 h-5 text-black mr-2" />
                {labels.location.scheduleTitle}
              </h3>
              <div className="space-y-2">
                {schedule.map((time, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-black" />
                    <span className="text-gray-700">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={images.location.map}
              alt="Location"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="text-lg font-semibold">{labels.location.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;