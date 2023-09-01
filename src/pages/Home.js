import { BasicConcept ,ModernClassicConcept, PartyContext,SchoolContext, MiddleNavbar, } from '../components';
import { Suspense } from 'react';

function Home() {
  return (
    <div className='p-4 sm:px-32 flex flex-col gap-10 lg:px-40'>
      <Suspense fallback={<div>Loading...</div>}>
        <BasicConcept />
        <PartyContext />
        <MiddleNavbar />
        <SchoolContext />
        <ModernClassicConcept />
      </Suspense>
    </div>
  );
}

export default Home;