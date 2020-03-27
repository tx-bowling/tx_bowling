# frozen_string_literal: true

require 'support/webmock'

WebMock.stub_request(:get, 'https://nominatim.openstreetmap.org/search?accept-language=en&addressdetails=1&format=json&q=5700%20Grover%20Ave,%20Austin,%20TX%2078756')
       .with(
         headers: {
           'Accept' => '*/*',
           'Accept-Encoding' => 'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
           'User-Agent' => 'Ruby'
         }
       )
       .to_return(
         status: 200,
         body: [
           {
             "lat": '30.32911445',
             "lon": '-97.73173634693961'
           }
         ].to_json,
         headers: {}
       )

WebMock.stub_request(:get, 'https://nominatim.openstreetmap.org/search?accept-language=en&addressdetails=1&format=json&q=123%20Wrong%20Way,%20Invalid,%20WI%2054321')
       .with(
         headers: {
           'Accept' => '*/*',
           'Accept-Encoding' => 'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
           'User-Agent' => 'Ruby'
         }
       )
       .to_return(status: 200, body: [].to_json, headers: {})
