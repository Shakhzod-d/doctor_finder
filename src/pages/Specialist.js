import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import ApiService from '../utils/apiService';
import { FILE_PATH } from '../utils/constants';
import '../App.css'; // Import the CSS file

const Specialist = () => {
  const [specialists, setSpecialists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecialists = async () => {
      try {
        const data = await ApiService.getSpecialists();
        setSpecialists(data.specialists);
      } catch (error) {
        console.error('Error fetching specialists:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecialists();
  }, []);

  const imageUrl = `${FILE_PATH}/storage/uploads/images/`; // Replace with actual base URL where images are hosted

  return (
    <Container fluid className="mt-4">
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <div>
          <h4 className="text-left">Browse Specialists</h4>
          <div className="specialists-container">
            {specialists.map((specialist) => (
              <div key={specialist.id} className="specialist-item">
                {/* Specialist Image */}
                <img
                  src={`${imageUrl}${specialist.image}`}
                  alt={specialist.name}
                  className="specialist-image"
                />
                {/* Specialist Name */}
                <div className="specialist-name">
                  {specialist.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Specialist;