"use client"
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import GuideList from './guides/components/GuideList';
import useUserGuides from './guides/hooks/useUserGuides';

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
