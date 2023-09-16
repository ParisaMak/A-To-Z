import React from 'react';
import { MamaConcept, ModernClassicConcept, PartyContext, SchoolContext, MiddleNavbar ,EverydayFashionConcept } from '.';

const MemoizedMamaConcept = React.memo(MamaConcept);
const MemoizedModernClassicConcept = React.memo(ModernClassicConcept);
const MemoizedPartyContext = React.memo(PartyContext);
const MemoizedSchoolContext = React.memo(SchoolContext);
const MemoizedMiddleNavbar = React.memo(MiddleNavbar);
const MemoizedEverydayFashionConcept = React.memo(EverydayFashionConcept);

function Home() {
  return (
    <div className='w-full p-10 flex flex-col gap-10 lg:px-40'>
        <>
          <MemoizedEverydayFashionConcept/>
          <MemoizedModernClassicConcept/>
          <MemoizedPartyContext  />
          <MemoizedMiddleNavbar  />
          <MemoizedSchoolContext />
          <MemoizedMamaConcept  />
        </>
    </div>
  );
}

export default Home;