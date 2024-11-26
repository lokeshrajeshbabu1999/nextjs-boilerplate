"use client"
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import useUserGuides from './hooks/useUserGuides';
import GuideList from './guides/components/GuideList';

export default function HomePage() {
  const [userGuide, isLoading] = useUserGuides();
  const router = useRouter();

  const handleGuideClick = (source, guide_id) => {
    const pathGuide = `/guide/view?src=${source}&id=${guide_id}`;
    router.push(pathGuide);
  };
  return (
    <Container>
      <GuideList
        guides={userGuide}
        isLoading={isLoading}
        handleGuideClick={(source, guide_id) =>
          handleGuideClick(source, guide_id)
        }
      />
    </Container>
  );
}
