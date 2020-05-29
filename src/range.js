export default function* range(start, end, step = 1) {
  const increasing = start < end;
  const increment = increasing ? Math.abs(step) : -Math.abs(step);
  for (
    let step = start;
    increasing ? step < end : step > end;
    step += increment
  )
    yield step;
}
