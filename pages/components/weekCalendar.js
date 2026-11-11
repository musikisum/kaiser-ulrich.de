import { Box, Text } from '@chakra-ui/react';

const DAYS = [
  { name: 'Montag', short: 'Mo' },
  { name: 'Dienstag', short: 'Di' },
  { name: 'Mittwoch', short: 'Mi' },
  { name: 'Donnerstag', short: 'Do' },
  { name: 'Freitag', short: 'Fr' }
];
const START_HOUR = 10;
const END_HOUR = 19;
const HOUR_HEIGHT = 56;
const TOTAL_MINUTES = (END_HOUR - START_HOUR) * 60;
const COLOR = '#6e91a1';
const BACKGROUND = '#eef3f6';
const LINE = '2px solid #b4c4cd';

function toMinutes(value) {
  if(!value) {
    return NaN;
  }
  if(!value.includes(':')) {
    return parseInt(value, 10);
  }
  const [h, m] = value.split(':');
  return parseInt(h, 10) * 60 + parseInt(m || '0', 10);
}

function formatTime(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h + ':' + String(m).padStart(2, '0');
}

// Ordnet die Termine eines Tages nebeneinanderliegenden Spalten zu, falls sie sich überschneiden
function layoutDay(events) {
  const sorted = [...events].sort((a, b) => a.start - b.start);
  const result = [];
  let group = [];
  let groupEnd = -1;
  const flush = () => {
    const lanes = Math.max(...group.map(e => e.lane)) + 1;
    group.forEach(e => result.push({ ...e, lanes }));
    group = [];
  };
  sorted.forEach(event => {
    if(group.length && event.start >= groupEnd) {
      flush();
    }
    const usedLanes = group.filter(e => e.end > event.start).map(e => e.lane);
    let lane = 0;
    while(usedLanes.includes(lane)) {
      lane++;
    }
    group.push({ ...event, lane });
    groupEnd = Math.max(groupEnd, event.end);
  });
  if(group.length) {
    flush();
  }
  return result;
}

function getEvents(semester, dayName) {
  const events = (semester.unterricht || [])
    .filter(item => item.DayOfWeek === dayName)
    .map(item => {
      const start = toMinutes(item.Start);
      const duration = toMinutes(item.Duration);
      return { item, start, end: start + (duration || 0) };
    })
    .filter(e => !isNaN(e.start) && e.end > e.start)
    .filter(e => e.end > START_HOUR * 60 && e.start < END_HOUR * 60);
  return layoutDay(events);
}

export default function WeekCalendar({ semester }) {

  if(!semester || !semester.unterricht) {
    return null;
  }

  const hours = [];
  for(let h = START_HOUR; h < END_HOUR; h++) {
    hours.push(h);
  }
  const bodyHeight = hours.length * HOUR_HEIGHT;

  return (
    <Box overflowX='auto' mt='30px' mb='40px'>
      <Box display='grid' gridTemplateColumns='48px repeat(5, minmax(110px, 1fr))' minW='600px' fontSize='sm' bg={BACKGROUND} borderRadius='6px' pt='8px' pr='4px' pb='4px'>
        <Box />
        { DAYS.map(day => (
          <Box key={day.short} textAlign='center' fontWeight='bold' color={COLOR} pb='6px' borderBottom={LINE}>
            { day.short }
          </Box>
        )) }

        <Box position='relative' h={bodyHeight + 'px'}>
          { hours.map((h, i) => (
            <Text key={h} position='absolute' top={i * HOUR_HEIGHT + 'px'} right='6px' fontSize='xs' color='gray.500' lineHeight='1' mt='2px'>
              { h }:00
            </Text>
          )) }
        </Box>

        { DAYS.map(day => (
          <Box key={day.short} position='relative' h={bodyHeight + 'px'} borderLeft={LINE}>
            { hours.map((h, i) => (
              <Box key={h} position='absolute' left='0' right='0' top={i * HOUR_HEIGHT + 'px'} h={HOUR_HEIGHT + 'px'} borderBottom={LINE} />
            )) }
            { getEvents(semester, day.name).map(({ item, start, end, lane, lanes }, index) => {
              const top = Math.max(start - START_HOUR * 60, 0);
              const bottom = Math.min(end - START_HOUR * 60, TOTAL_MINUTES);
              return (
                <Box
                  key={index}
                  position='absolute'
                  top={(top / 60 * HOUR_HEIGHT) + 'px'}
                  h={((bottom - top) / 60 * HOUR_HEIGHT) + 'px'}
                  left={`calc(${lane / lanes * 100}% + 2px)`}
                  w={`calc(${100 / lanes}% - 4px)`}
                  bg={COLOR}
                  color='white'
                  borderRadius='4px'
                  px='4px'
                  py='2px'
                  overflow='hidden'
                  title={`${item.Title} (${formatTime(start)}–${formatTime(end)} Uhr)`}
                >
                  <Text fontSize='xs' lineHeight='1.2'>{ formatTime(start) }–{ formatTime(end) }</Text>
                  <Text fontSize='xs' fontWeight='bold' lineHeight='1.2'>{ item.Title }</Text>
                </Box>
              );
            }) }
          </Box>
        )) }
      </Box>
    </Box>
  );
}
