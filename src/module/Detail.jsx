import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Container, Spinner } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { AdvancedCard } from 'asab_webui_components/dist/components/AdvancedCard/AdvancedCard';
import ReactJson from 'react-json-view';
import { DateTime } from 'asab_webui_components/dist/components/DateTime/DateTime';

export function DetailScreen(props) {
  const { t } = useTranslation();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    console.log('fetching user with id:', id);
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://devtest.teskalabs.com/detail/${id}`);
        const data = await res.json();
        if (isMounted) {
          setUser(data);
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        if (isMounted) {
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUser();
    // Cleanup function to avoid memory leaks
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <Container className="h-100">
      <div className="flex-row mb-2">
        <Link to={`/`}>
          <button className="btn btn-secondary me-1">
            <i className="bi bi-arrow-left"></i>
          </button>
        </Link>
      </div>
      {loading ? (
        <Spinner color="primary" />
      ) : user ? (
        <>
          <Card>
            <CardHeader className="card-header-flex">
              <div className="flex-fill">
                <h3>
                  {t('user_detail|page_title')}: {user.username}
                </h3>
              </div>
            </CardHeader>
            <CardBody>
              <p>
                <strong>{t('user_detail|created')}:</strong> <DateTime value={user.created} />
              </p>
              <p>
                <strong>{t('user_detail|last_sign_in')}:</strong>{' '}
                <DateTime value={user.last_sign_in} />
              </p>
              <p>
                <strong>{t('user_detail|username')}:</strong> {user.username}
              </p>
              <p>
                <strong>{t('user_detail|email')}:</strong> {user.email}
              </p>
              <p>
                <strong>{t('user_detail|address')}:</strong> {user.address}
              </p>
            </CardBody>
          </Card>
        </>
      ) : (
        <p>{t('user_detail|user_not_found')}</p>
      )}
    </Container>
  );
}
