import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LearnMorePage = () => {
  return (
    <div className='p-4 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-bold text-center mb-6'>Our Mission at IYE Education</h1>
      <p className='text-lg mb-8'>Empowering Teachers by nurturing their passion, valuing their expertise, and prioritizing their well-being. We are committed to revolutionizing education by providing flexibility, recognition, and growth opportunities.</p>

      <Card className='mb-6'>
        <CardContent>
          <h2 className='text-2xl font-semibold mb-2'>What Teachers Will Get at IYE Education</h2>
          <ul className='list-disc ml-6 space-y-2'>
            <li>Balanced Workload - 22 to 24 classes per month.</li>
            <li>Flexible Timing - Choose your own teaching hours.</li>
            <li>Timely Payments - Withdraw salaries in multiples of 10 days.</li>
            <li>Location Flexibility and Travel Benefits.</li>
            <li>Incentives and Recognition for exceptional performance.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardContent>
          <h2 className='text-2xl font-semibold mb-2'>Role and Responsibilities</h2>
          <ul className='list-disc ml-6 space-y-2'>
            <li>Daily Diary Check and Timely Syllabus Completion.</li>
            <li>Fortnightly Feedback on students’ performance.</li>
            <li>Weekly Rating and Transparent Communication with parents.</li>
            <li>Compensatory Classes for absent students.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardContent>
          <h2 className='text-2xl font-semibold mb-2'>Terms and Conditions</h2>
          <ul className='list-disc ml-6 space-y-2'>
            <li>Daily Compensation and Demo Class Policy.</li>
            <li>Exam Period Policy and Company Policy Violations.</li>
            <li>Notice Period and Salary Withdrawal.</li>
            <li>No Unauthorized Tutoring and Confidentiality of content.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardContent>
          <h2 className='text-2xl font-semibold mb-2'>Leave Policy</h2>
          <ul className='list-disc ml-6 space-y-2'>
            <li>Short Leave - Inform at least 6 hours in advance.</li>
            <li>Long Leave - Inform at least 24 hours in advance.</li>
            <li>Substitute Policy and Additional Leave options.</li>
          </ul>
        </CardContent>
      </Card>

      <div className='text-center mt-8'>
        <Button className='px-6 py-3 text-xl'>Join Us Today!</Button>
      </div>
    </div>
  );
};

export default LearnMorePage;
