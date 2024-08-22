export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div>
            {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} sayfası
            henüz hazır değil
        </div>
    );
}
