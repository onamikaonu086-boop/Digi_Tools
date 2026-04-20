export function ButtonPrimary(props) {
  return <button {...props} className="px-4 py-2 bg-primary text-white rounded-full shadow cursor-pointer" />;
}

export function ButtonOutline(props) {
  return <button {...props} className="px-4 py-2 border-2 border-primary text-primary rounded-full cursor-pointer hover:bg-primary hover:text-white transition-colors" />;
}
